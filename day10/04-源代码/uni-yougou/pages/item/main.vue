<template>
  <div class="wrapper">
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      circular
      indicator-color="#ccc"
      indicator-active-color="#fff"
    >
      <block v-for="(item, index) in goods.pics" :key="index">
        <swiper-item @click="prevImg(index)">
          <image class="swiper-img" :src="item.pics_big"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 商品信息 -->
    <div class="goods-info">
      <p class="price">￥{{ goods.goods_price }}</p>
      <div class="name-favo">
        <p class="name">{{ goods.goods_name }}</p>
        <div class="favo">
          <span class="iconfont icon-share"></span>
          <span>分享</span>
          <button open-type="share">分享</button>
        </div>
      </div>
      <p class="express">快递: 免运费</p>
    </div>
    <div class="promote">
      <ul>
        <li>
          <span class="name">促销</span>
          <span class="detail">满300减30元</span>
        </li>
        <li class="brother">
          <span class="name">已选</span>
          <span class="detail gray">黑色/S/1件</span>
        </li>
      </ul>
    </div>
    <!-- 图文介绍 -->
    <div class="goods-detail">
      <div class="tabs">
        <span
          :class="{ active: activeIndex === index }"
          v-for="(item, index) in tabs"
          :key="index"
          @click="changeIndex(index)"
          >{{ item }}</span
        >
      </div>
      <div class="main">
        <div v-show="activeIndex === 0" v-html="goods.goods_introduce"></div>
        <div v-show="activeIndex">商品参数</div>
      </div>
    </div>
    <div class="fixed-bottom">
      <div class="icon-text">
        <span class="iconfont icon-kefu"></span>
        <span>联系客服</span>
        <button open-type="contact">联系客服</button>
      </div>
      <div class="icon-text" @click="toCart">
        <span class="iconfont icon-cart"></span>
        <span>购物车</span>
      </div>
      <div class="btn add-cart-btn" @click="add2Cart">加入购物车</div>
      <div class="btn buy-btn" @click="toBuy">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: ['图文介绍', '规格参数'],
      activeIndex: 0,
      goods: {}
    }
  },
  onLoad (options) {
    let id = options.id
    this.queryGoodsDetail(id)
  },
  // 自定义转发内容
  onShareAppMessage () {
    return {
      title: this.goods.goods_name,
      imageUrl: this.goods.pics[0].pics_big
    }
  },
  methods: {
		changeIndex(index){
			this.activeIndex = index
		},
    toBuy () {
      // 跳转支付页面，并带上goodsId
      wx.navigateTo({ url: '/pages/pay/main?goodsId=' + this.goods.goods_id })
    },
    add2Cart () {
      let goodsId = this.goods.goods_id
      this.$store.commit('add2Cart', goodsId)
    },
    // 跳转购物车
    toCart () {
      wx.switchTab({ url: '/pages/cart/main' })
    },
    prevImg (index) {
      let urls = []
      this.goods.pics.forEach(v => {
        urls.push(v.pics_big)
      })
      wx.previewImage({
        current: urls[index], // 默认展示图片链接
        urls // 需要预览的图片http链接列表
      })
    },
    queryGoodsDetail (id) {
      this.$request({
        url: `/api/public/v1/goods/detail?goods_id=${id}`
      }).then(data => {
        // console.log(data)
        this.goods = data
      })
    }
  }
}
</script>

<style lang="less">
.iconfont {
  font-size: 36rpx;
}
.wrapper {
  background-color: #f4f4f4;
  padding-bottom: 98rpx;
}

.swiper {
  height: 720rpx;
}

.swiper-img {
  width: 100%;
  height: 720rpx;
}

.goods-info {
  padding: 40rpx 0 30rpx 20rpx;
  background-color: #fff;

  .price {
    color: #eb4450;
    font-size: 40rpx;
  }

  .name-favo {
    display: flex;
    height: 78rpx;
    margin-top: 14rpx;

    .name {
      color: #333;
      flex: 1;
      font-size: 28rpx;
      padding-right: 78rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }

    .favo {
      border-left: 1px solid #ddd;
      width: 144rpx;
      color: #999;
      font-size: 24rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      button {
        position: absolute;
        top: 0;
        opacity: 0;
      }
    }
  }

  .express {
    color: #999;
    font-size: 24rpx;
    margin-top: 20rpx;
  }
}

.promote {
  margin-top: 20rpx;

  li {
    background-color: #fff;
    height: 96rpx;
    line-height: 96rpx;
    font-size: 28rpx;
    margin-top: 20rpx;
    padding-left: 20rpx;

    &.brother {
      margin-top: 0;
    }

    .name {
      color: #404040;
    }

    .detail {
      color: #ff4055;
      margin-left: 40rpx;

      &.gray {
        color: #dfdfdf;
      }
    }
  }
}

.goods-detail {
  margin-top: 20rpx;
  background-color: #fff;

  .tabs {
    display: flex;

    span {
      flex: 1;
      text-align: center;
      color: #404040;
      font-size: 22rpx;
      height: 100rpx;
      line-height: 100rpx;
      box-sizing: border-box;

      &.active {
        color: #ff4055;
        border-bottom: 10rpx solid #ff2644;
      }
    }
  }
}

.fixed-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 98rpx;
  display: flex;
  background-color: #fff;

  .icon-text {
    flex: 2;
    font-size: 20rpx;
    color: #404040;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    button {
      position: absolute;
      top: 0;
      opacity: 0;
    }
  }

  .btn {
    flex: 3;
    color: #fff;
    text-align: center;
    line-height: 98rpx;

    &.add-cart-btn {
      background-color: #ffb400;
    }

    &.buy-btn {
      background-color: #ff2d4a;
    }
  }
}
</style>
