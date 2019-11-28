<template>
  <div>

    <!-- 头部 -->
    <div class="header">
      <icon type="search"
            size="16"
            color="#bbb;">
      </icon>
      <div class="inner">搜索</div>
    </div>

    <swiper indicator-dots
            autoplay
            circular
            indicator-color="rgba(255,255,255,0.3)"
            indicator-active-color="#fff"
            >
      <block v-for="(item, index) in 6" :key="index">
        <swiper-item>
          <image
                 src="/static/images/test.png"></image>
        </swiper-item>
      </block>
    </swiper>

  <!-- 分类 -->
    <div class="category">
      <img v-for="(item, index) in 4" :key="index" src="https://api.zbztb.cn/pyg/icon_index_nav_4@2x.png" alt="">
    </div>
  <!-- 楼层 -->
  <div class="floor">
    <div class="floor-item" v-for="(item, index) in 3" :key="index">
      <img src="https://api.zbztb.cn/pyg/pic_floor01_title.png" alt="">
      <div class="btm-box">
        <img src="https://api.zbztb.cn/pyg/pic_floor01_1@2x.png" alt="">
        <div class="right">
          <img v-for="(item2, index2) in 4" :key="index2" src="https://api.zbztb.cn/pyg/pic_floor01_2@2x.png" alt="">
        </div>
      
      </div>

    </div>

  </div>

  </div>


</template>

<script>
export default {

}
</script>

<style lang="less">
.header {
  height: 100rpx;
  padding: 0 16rpx;
  position: relative;
  background-color: #eb4450;
  display: flex;
  align-items: center;
  icon {
    position: absolute;
    left: 307rpx;
    top: 34rpx;
  }

  .inner {
    height: 60rpx;
    line-height: 60rpx;
    background-color: #fff;
    border-radius: 8rpx;
    color: #bbb;
    width: 100%;
    text-align: center;
  }
}

swiper{
  image{
    width: 100%;
    height:340rpx;
  }
}

.category{
  height: 194rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img{
    width: 128rpx;
    height: 140rpx;
  }
}

.floor-item{
  >img{
    height: 88rpx;
    width: 100%;
  }
  .btm-box{
    display: flex;
    padding:20rpx 17rpx;
    >img{
      width: 232rpx;
      height:386rpx;
    }
    .right{
      flex:1;
      display: flex;
      flex-wrap: wrap;
      img{
        width: 232rpx;
        margin-left:10rpx;
        margin-bottom:10rpx;
        height: 188rpx;
      }
    }
  }
}
</style>