<template>

<div class="container">
  <SearchHotspot></SearchHotspot>
  <!-- 轮播图 -->
  <swiper indicator-dots autoplay circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.3)">
      <block>
          <swiper-item v-for="item in swiperdata" :key="item.goods_id">
              <img :src="item.image_src" alt="">
          </swiper-item>
      </block>
  </swiper>

  <!-- 分类 -->
  <div class="categories">
    <img v-for="(item, index) in catitems" :key="index" :src="item.image_src" alt="">
  </div>

  <!-- 楼层 -->
  <ul class="floor">
    <li v-for="(item, index) in floordata" :key="index">
      <img :src="item.floor_title.image_src" alt="">
      <div class="product-list">
        <img :src="item.product_list[0].image_src" alt="">
        <div class="right">
          <block
           v-for="(imgItem, imgIndex) in item.product_list" :key="imgItem.name">
            <img v-if="imgIndex"  :src="imgItem.image_src" alt="">
          </block>
        </div>
      </div>
    </li>
  </ul>

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
      // 轮播图数据
      swiperdata: [],
      catitems: [],
      floordata: []
    }
  },

  onLoad () {
    this.getSwiperdata()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    // 请求轮播图数据
    getSwiperdata () {
      this.$request({
        url: '/api/public/v1/home/swiperdata'
      }).then(data => {
        this.swiperdata = data
      })
    },
    // 分类图片
    getCatitems () {
      this.$request({
        url: '/api/public/v1/home/catitems'
      }).then(data => {
        this.catitems = data
      })
    },
    // 楼层图片
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
swiper{
  height: 340rpx;
  img{
    width:100%;
    height: 100%;
  }
}

.categories{
  display: flex;
  height: 194rpx;
  align-items: center;
  justify-content: space-evenly;
  img{
    width: 128rpx;
    height: 140rpx;
  }
}
.floor{
  li{
    >img{
      width: 100%;
      height: 88rpx;
    }
    
  }
}

.product-list{
  padding:20rpx 17rpx;
  display: flex;
  >img{
    width:232rpx;
    height: 386rpx;
  }
  .right{
    flex:1;
    font-size: 0;
    img{
      margin:0 0 10rpx 10rpx;
      width: 232rpx;
      height: 188rpx;
    }
  }
}
</style>