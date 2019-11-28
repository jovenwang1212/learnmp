<template>
  <div>
    <div class="address-wrapper">
      <div class="address"
           v-if="addr.userName">
        <div class="receiver">
          <p class="name">收货人：{{addr.userName}}</p>
          <p class="phone-num">{{addr.telNumber}}</p>
          <span class="iconfont icon-arrow-right"></span>
        </div>
        <p class="address-txt">收货地址：{{fullAddr}}</p>
      </div>
      <!-- 选择地址 -->
      <div class="choose-address"
           v-else
           @click="getAddr">
        <p>请选择地址</p>
        <span class="iconfont icon-arrow-right"></span>
      </div>
      <div class="flower">
        <img src="/static/images/cart_border@2x.png">
      </div>
    </div>

    <!-- 商品列表 -->
    <ul class="goods-list">
      <li class="goods-item"
          v-for="item in goodsList"
          :key="item.goods_id">
        <img :src="item.goods_small_logo"
             alt="">
        <div class="right">
          <p class="text-line2">{{item.goods_name}}</p>
          <div class="btm">
            <span class="price">￥<span>{{item.goods_price}}</span>.00</span>
            <div class="goods-num">
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="bottom-fixed"
         @click="pay">
      微信支付({{totalPrice}}.00)
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addr: wx.getStorageSync('addr') || {},
      goodsList: []
    }
  },
  onLoad (options) {
    this.goodsId = options.goodsId
    this.getGoodsList()
  },
  computed: {
    fullAddr () {
      return this.addr.provinceName + this.addr.cityName + this.addr.countyName + this.addr.detailInfo
    },
    totalPrice () {
      // 每个商品的数量*价格
      return this.goodsList.reduce((sum, item) => {
        return sum + item.num * item.goods_price
      }, 0)
    }
  },
  methods: {
    pay () {
      if (!this.addr.userName) {
        this.$showToast('请选择地址哦')
        return
      }
      let token = wx.getStorageSync('token')
      if (!token) {
        wx.navigateTo({ url: '/pages/login/main' })
        return
      }

      this.createOrder(token)
    },
    createOrder (token) {
      this.$request({
        url: '/api/public/v1/my/orders/create',
        isAuth: true,
        method: 'POST',
        data: {
          order_price: this.totalPrice,
          consignee_addr: this.fullAddr,
          goods: this.filterGoodsList()

        }
      }).then(data => {
        this.doPay(token, data.order_number)
      }).finally(() => {
        // 如果是从商详的立即购买过来，不需要整理cart
        if (this.goodsId) {

        }
        // 不管创建订单成功还是失败，都应该从购物车里面去掉
        this.$store.commit('removeCart')
      })
    },
    doPay (token, orderNumber) {
      this.$request({
        url: '/api/public/v1/my/orders/req_unifiedorder',
        isAuth: true,
        method: 'POST',
        data: {
          order_number: orderNumber
        }
      }).then(data => {
        // console.log(data)
        wx.requestPayment({
          ...data.pay,
          success: res => {
            // this.$showToast('成功')
            // 订单结果页
            wx.navigateTo({ url: '/pages/order_result/main' })
          },
          fail: () => {
            // this.$showToast('失败')
            wx.navigateTo({ url: '/pages/order_result/main?orderNumber=' + orderNumber })
          },
          complete: () => { }
        })
      })
    },
    filterGoodsList () {
      let _goods = []

      this.goodsList.forEach(v => {
        _goods.push({
          goods_id: v.goods_id,
          goods_number: v.num,
          goods_price: v.goods_price
        })
      })

      return _goods
    },
    getGoodsList () {
      /*
      let cart = {
        24234:{
          num:1,
          check:true
        },
        57567:{
          num:1,
          check:true
        }
      }
      */

      let ids = ''
      let cart = {}
      // 如果有goodsid，直接赋值给ids
      if (this.goodsId) {
        ids = this.goodsId
      } else {
        cart = this.$store.getters.getCart
        let buyList = this.filterCart(cart)
        ids = Object.keys(buyList).join(',')
      }

      this.$request({
        url: '/api/public/v1/goods/goodslist?goods_ids=' + ids
      }).then(data => {
        // console.log(data)

        let goodsList = data
        if (this.goodsId) {
          goodsList[0].num = 1
        } else {
          // cart和goodslist数据合并
          goodsList.forEach(v => {
            let obj = cart[v.goods_id]
            v.num = obj.num
          })
        }

        this.goodsList = goodsList
      })
    },
    // 购物车的数据，如果没有checked，就去掉
    filterCart (c) {
      let cart = Object.assign({}, c)
      for (let key in cart) {
        if (!cart[key].checked) {
          delete cart[key]
        }
      }
      return cart
    },
    getAddr () {
      /*
      1. 首次请求权限
      2. 如果允许的话，可以调接口获取相应的授权数据
      3.如果拒绝，没有反应。需要引导打开设置，允许
      */
      wx.getSetting({ success: res => {
        console.log(res)
        if (res.authSetting['scope.address'] === false) {
          wx.showModal({
            title: '提示', // 提示的标题,
            content: '请允许用户访问通讯地址', // 提示的内容,
            showCancel: true, // 是否显示取消按钮,
            cancelText: '取消', // 取消按钮的文字，默认为取消，最多 4 个字符,
            cancelColor: '#000000', // 取消按钮的文字颜色,
            confirmText: '确定', // 确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F', // 确定按钮的文字颜色,
            success: res => {
              if (res.confirm) {
                wx.openSetting({ success: res => { } })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        } else {
          // 允许
          // 首次
          wx.authorize({
            scope:
                'scope.address',
            success: res => {
              wx.chooseAddress({
                success: (res) => {
                  console.log(res)
                  this.addr = res
                  wx.setStorageSync('addr', this.addr)
                }
              })
            }
          })
        }
      } })
    }
  }
}
</script>

<style lang="less">
.address-wrapper {
  background-color: #fff;
}

.address {
  display: flex;
  flex-direction: column;
  padding: 44rpx 30rpx 48rpx 20rpx;
  .receiver {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50rpx;
    position: relative;
    .phone-num {
      margin-right: 40rpx;
    }
    .icon-arrow-right {
      position: absolute;
      top: 8rpx;
      right: 0;
      color: #999;
    }
  }
}

.choose-address {
  display: flex;
  padding: 44rpx 30rpx 48rpx 20rpx;
  justify-content: space-between;
  .icon-arrow-right {
    color: #999;
  }
}

.flower {
  img {
    height: 16rpx;
    width: 100%;
    display: block;
  }
}

.goods-item {
  height: 206rpx;
  background-color: #fff;
  border-top: 1rpx solid #ddd;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  img {
    width: 160rpx;
    height: 160rpx;
    margin-left: 30rpx;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 20rpx 0 18rpx;
    .btm {
      display: flex;
      margin-top: 40rpx;
      justify-content: space-between;
      .price {
        color: #eb4450;
        > span {
          font-size: 24px;
        }
      }
      .goods-num {
        display: flex;
        align-items: center;
        button {
          width: 60rpx;
          height: 50rpx;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4rpx solid #666;
        }
        span {
          margin: 0 30rpx;
        }
      }
    }
  }
}
.goods-list {
  position: absolute;
  bottom: 98rpx;
  top: 243rpx;
  width: 100%;
  overflow: auto;
  padding-bottom: 60rpx;
  background-color: #f4f4f4;
}

.bottom-fixed {
  position: absolute;
  height: 98rpx;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1aad19;
  color: #fff;
  line-height: 98rpx;
  text-align: center;
}
</style>