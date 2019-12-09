<template>
  <div>
    <SearchLink/>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255,255,255,0.3)"
      indicator-active-color="#fff"
    >
      <block v-for="(item, index) in swiperdata" :key="index">
        <swiper-item>
          <image :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>

    <!-- 分类 -->
    <view class="cates">
      <view v-for="(item, index) in catitems" :key="index">
        <img :src="item.image_src" alt="" />
      </view>
    </view>

    <!-- 楼层 -->
    <view>
      <view class="floor-item" v-for="(floor, fIndex) in floordata" :key="fIndex">
        <img :src="floor.floor_title.image_src" alt="" />
        <div class="products">
          <img :src="floor.product_list[0].image_src" alt="" />
          <div class="right">
            <block v-for="(item, index) in floor.product_list" :key="index">
              <img v-if="index" :src="item.image_src" alt="" />
            </block>
          </div>
        </div>
      </view>
    </view>
  </div>
</template>

<script>
import SearchLink from '@/components/SearchLink'
export default {
  components: {
    SearchLink
  },
  data () {
    return {
      swiperdata: [],
      catitems: [],
      floordata: []
    }
  },
  created () {
    this.getSwiperdata()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    getSwiperdata () {
      this.$request({
        url: '/api/public/v1/home/swiperdata'
      }).then(data => {
        this.swiperdata = data
      })
    },
    getCatitems () {
      this.$request({
        url: '/api/public/v1/home/catitems'
      }).then(data => {
        this.catitems = data
      })
    },
    getFloordata () {
      this.$request({
        url: '/api/public/v1/home/floordata'
      }).then(data => {
        this.floordata = data
      })
    }
  }
}
</script>

<style lang="less">
swiper image {
  width: 100%;
  height: 340rpx;
}

.cates {
  height: 194rpx;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 128rpx;
    height: 140rpx;
  }
}

.floor-item {
  margin-bottom: 20rpx;
  > img {
    width: 100%;
    height: 88rpx;
  }
  .products {
    display: flex;
    margin-top: 20rpx;
    padding-left: 18rpx;
    > img {
      width: 232rpx;
      height: 386rpx;
    }
    .right {
      flex: 1;
      font-size: 0;
      > img {
        width: 232rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
      }
    }
  }
}
</style>
