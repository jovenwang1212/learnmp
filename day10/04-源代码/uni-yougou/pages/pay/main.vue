<template>
  <div>
    <div class="address-wrapper">
      <div class="address" v-if="address.userName">
        <div class="receiver">
          <p class="name">收货人：{{address.userName}}</p>
          <p class="phone-num">{{address.telNumber}}</p>
          <span class="iconfont icon-arrow-right"></span>
        </div>
        <p class="address-txt">收货地址：{{detailAddr}}</p>
      </div>
      <!-- 选择地址 -->
      <div class="choose-address" v-else @click="getAddr">
        <p>请选择地址</p>
        <span class="iconfont icon-arrow-right"></span>
      </div>
      <div class="flower">
        <img src="/static/images/cart_border@2x.png">
      </div>
    </div>

    <!-- 商品列表 -->
    <ul class="goods-list">
      <li class="goods-item" v-for="(item, index) in goodsList" :key="index">
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

    <div class="bottom-fixed" @click="pay">
      微信支付({{totalPrice}}.00)
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      address: wx.getStorageSync('address') || {},
      goodsList: []
    }
  },
  onLoad (options) {
    this.goodsId = options.goodsId
    this.getGoodsList()
  },
  methods: {
    pay () {
      // 判断是否有收货地址
      if (!this.address.userName) {
        wx.showToast({
          title: '请选择收货地址',
          icon: 'none'
        })
        return
      }
      // 判断是否有商品
      if (!this.totalPrice) {
        wx.showToast({
          title: '请选择商品',
          icon: 'none'
        })
        return
      }
      // 创建订单
      this.createOrder()
    },
    createOrder () {
      this.$request({
        url: '/api/public/v1/my/orders/create',
        method: 'POST',
        isAuth: true,
        data: {
          order_price: this.totalPrice,
          consignee_addr: this.detailAddr,
          goods: this.filterGoodsList()
        }
      }).then(data => {
        // console.log(data)
        this.orderNumber = data.order_number
        // 订单创建成功，无论是否支付，都把checked的商品去掉
        if (!this.gooodsId) {
          this.arrangeCart()
        }
        this.doPay()
      })
    },
    arrangeCart () {
      this.$store.commit('arrangeCart')
    },
    doPay () {
      this.$request({
        url: '/api/public/v1/my/orders/req_unifiedorder',
        method: 'POST',
        isAuth: true,
        data: {
          order_number: this.orderNumber
        }
      }).then(data => {
        console.log(data)
        wx.requestPayment({
          ...data.pay,
          success (res) {
            // console.log('成功支付')
            wx.navigateTo({ url: '/pages/order_result/main' })
          },
          fail: (res) => {
            console.log('支付失败')
            wx.navigateTo({ url: '/pages/order_result/main?orderNumber=' + this.orderNumber })
          }
        })
      })
    },
    filterGoodsList () {
      let arr = []
      this.goodsList.forEach(v => {
        arr.push({
          goods_id: v.goods_id,
          goods_number: v.num,
          goods_price: v.goods_price
        })
      })
      return arr
    },
    filterCart (cart) {
      let ids = []
      for (let key in cart) {
        let goods = cart[key]
        if (goods.checked) {
          ids.push(key)
        }
      }
      return ids.join(',')
    },
    getGoodsList () {
      let cart = this.$store.getters.getCart
      // 保证立即购买的情况和原来的逻辑一样
      if (this.goodsId) {
        cart = {
          [this.goodsId]: {
            num: 1,
            checked: true
          }
        }
      }
      // 只有购物车里面checked的商品才展示在商品列表里面
      let ids = this.filterCart(cart)

      // 如果购物车数据是空的，return
      if (!ids) {
        return
      }
      this.$request({
        url: '/api/public/v1/goods/goodslist?goods_ids=' + ids
      }).then(data => {
        // goodsList和购物车数据融合
        data.forEach(v => {
          v.num = cart[v.goods_id].num
          v.checked = cart[v.goods_id].checked
        })
        this.goodsList = data
      })
    },
    getAddr () {
			debugger
      uni.getSetting({ success: res => {
        console.log(res)
        if (res.authSetting['scope.address'] === false) {
          // 被拒绝，提示打开
          uni.showModal({
            title: '提示', // 提示的标题,
            content: '请打开设置允许通讯地址', // 提示的内容,
            showCancel: true, // 是否显示取消按钮,
            cancelText: '取消', // 取消按钮的文字，默认为取消，最多 4 个字符,
            cancelColor: '#000000', // 取消按钮的文字颜色,
            confirmText: '确定', // 确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F', // 确定按钮的文字颜色,
            success: res => {
              if (res.confirm) {
                uni.openSetting()
              }
            }
          })
        } else {
          // 第一次授权或者已允许，请求授权，调接口拿数据
          uni.authorize({
            scope:
              'scope.address',
            success: () => {
              uni.chooseAddress({
                success: (data) => {
                  console.log(data)
                  this.address = data
                  uni.setStorageSync('address', data)
                }
              })
            }
          })
        }
      } })
    }
  },
  computed: {
    detailAddr () {
      let {provinceName, cityName, countyName, detailInfo} = this.address
      return provinceName + cityName + countyName + detailInfo
    },
    // 所有被选中的商品价格*数量
    totalPrice () {
      return this.goodsList.reduce((sum, v) => {
        return sum + (v.num * v.goods_price)
      }, 0)
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