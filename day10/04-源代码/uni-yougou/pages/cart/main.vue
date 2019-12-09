<template>
  <div class="content">
    <div class="title">
      <span class="iconfont icon-shop"></span>
      <span>优购生活馆</span>
    </div>
    <!-- 商品列表 -->
    <ul class="goods-list">
      <li class="goods-item" v-for="item in goodsList" :key="item.goods_id">
        <span class="iconfont" :class="item.checked?'icon-check':'icon-uncheck'"
        @click="toggleCheck(item)"></span>
        <img :src="item.goods_small_logo"
             alt="">
        <div class="right">
          <p class="text-line2">{{item.goods_name}}</p>
          <div class="btm">
            <span class="price">￥<span>{{item.goods_price}}</span>.00</span>
            <div class="goods-num">
              <button @click="sub(item)" :disabled="item.num===1">-</button>
              <span>{{item.num}}</span>
              <button @click="add(item)" >+</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="account">
      <div class="select-all">
        <span class="iconfont" :class="isAll?'icon-check':'icon-uncheck'" 
        @click="isAll = !isAll"></span>
        <span>全选</span>
      </div>

      <div class="price">
        <p>合计:<span class="num">￥{{totalPrice}}.00</span></p>
        <p class="info">包含运费</p>
      </div>
      <div class="account-btn" @click="doAccount">结算({{totalNum}})</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsList: []
    }
  },
  onShow () {
    // 发请求之前，需要重置goodsList
    this.goodsList = []
    this.getGoodsList()
    wx.setTabBarBadge({
      index: 2,
      text: Object.keys(this.$store.getters.getCart).length.toString()
    })
  },
  onHide () {
    this.$store.commit('updateCart', this.goodsList)
  },
  methods: {
		sub(item){
			item.num--
		},
		add(item){
			item.num++
		},
		toggleCheck(item){
			item.checked=!item.checked
		},
    doAccount () {
      // 商品数量为0
      if (!this.totalNum) {
        wx.showToast({
          title: '请选择商品',
          icon: 'none'
        })
        return
      }

      // 跳转支付
      wx.navigateTo({ url: '/pages/pay/main' })
    },
    getGoodsList () {
      let cart = this.$store.getters.getCart
			let ids = Object.keys(cart).join(',')
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
    }
  },
  computed: {
    // 所有被选中的商品价格*数量
    totalPrice () {
      return this.goodsList.reduce((sum, v) => {
        return sum + (v.checked ? v.num * v.goods_price : 0)
      }, 0)
    },
    // 所有被选中的商品的数量
    totalNum () {
      // let sum = 0
      // this.goodsList.forEach(v => {
      //   if (v.checked) {
      //     sum += v.num
      //   }
      // })
      // return sum

      return this.goodsList.reduce((sum, v) => {
        return sum + (v.checked ? v.num : 0)
      }, 0)
    },
    isAll: {
      // 如果所有商品都勾选的话，就true;详解：拿出goodsList.length==勾选商品的个数
      // 默认true,遍历goodsList，如果有一项没勾选的话，就false
      // let _isAll = true
      // this.goodsList.forEach(v => {
      //   if (!v.checked) {
      //     _isAll = false
      //     // break
      //   }
      // })
      // for (let item of this.goodsList) {
      //   if (!item.checked) {
      //     _isAll = false
      //     break
      //   }
      // }
      // return _isAll
      get () {
        return this.goodsList.every(v => {
          return v.checked
        })
      },
      set (status) {
        this.goodsList.forEach(v => {
          v.checked = status
        })
      }
    }
  }
}
</script>


<style lang="less">
.iconfont{
  font-size: 44rpx;
}
.title {
  height: 88rpx;
  display: flex;
  align-items: center;
  .iconfont {
    color: #999;
    margin: 6rpx 12rpx 0 32rpx;
  }
}

.goods-item {
  height: 206rpx;
  background-color: #fff;
  border-top: 1rpx solid #ddd;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  .iconfont {
    color: #eb4450;
    margin: 0 30rpx;
  }
  img {
    width: 160rpx;
    height: 160rpx;
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
  top: 88rpx;
  width: 100%;
  overflow: auto;
  padding-bottom: 60rpx;
  background-color: #f4f4f4;
}

.account {
  height: 98rpx;
  border-bottom: 1rpx solid #ddd;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  .iconfont {
    color: #eb4450;
    margin: 0 30rpx;
  }
  .account-btn {
    width: 230rpx;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #eb4450;
  }
  .select-all {
    flex: 1;
  }
  .price {
    margin-right: 20rpx;
    .num {
      color: #eb4450;
    }
    .info {
      color: #999;
    }
  }
}
</style>