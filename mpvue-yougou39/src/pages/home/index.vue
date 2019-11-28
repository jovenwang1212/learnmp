<template>
  <div>
    <SearchHotspot/>
    <swiper indicator-dots
            autoplay
            circular
            indicator-color="rgba(255,255,255,0.3)"
            indicator-active-color="#fff">
      <block v-for="item in swiperdata"
             :key="item.goods_id">
        <swiper-item>
          <image :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>

    <!-- 分类 -->
    <div class="category">
      <img v-for="item in catitems"
           :key="item.name"
           :src="item.image_src"
           alt="">
    </div>
    <!-- 楼层 -->
    <div class="floor">
      <div class="floor-item"
           v-for="(item, index) in floordata"
           :key="index">
        <img :src="item.floor_title.image_src"
             alt="">
        <div class="btm-box">
          <img :src="item.product_list[0].image_src"
               alt="">
          <div class="right">
            <block v-for="(item2, index2) in item.product_list"
                   :key="index2">
              <img v-if="index2" :src="item2.image_src"
                   alt="">
            </block>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import SearchHotspot from '@/components/SearchHotspot'
export default {
  components: {
    SearchHotspot
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
swiper {
  image {
    width: 100%;
    height: 340rpx;
  }
}

.category {
  height: 194rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 128rpx;
    height: 140rpx;
  }
}

.floor-item {
  > img {
    height: 88rpx;
    width: 100%;
  }
  .btm-box {
    display: flex;
    padding: 20rpx 17rpx;
    > img {
      width: 232rpx;
      height: 386rpx;
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      img {
        width: 232rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        height: 188rpx;
      }
    }
  }
}
</style>