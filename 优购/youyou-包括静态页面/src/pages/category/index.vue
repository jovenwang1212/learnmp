<template>
  <div>
    <!-- 头部搜索 -->
    <SearchHotspot/>
    <div class="main">

      <div class="left">
        <ul>
          <li v-for="(cate1, index) in categories" :key="cate1.cat_id" @click="activeIndex=index" :class="{active:activeIndex===index}">{{cate1.cat_name}}</li>
        </ul>
      </div>
      <div class="right" v-if="isInit">
        <img src="../../../static/images/titleImage.png" alt="">
        <ul>
          <li class="cate2" v-for="cate2 in categories[activeIndex].children" :key="cate2.cat_id">
            <p class="title">/<span>{{cate2.cat_name}}</span>/</p>
            <ul>
              <li class="cate3" v-for="(cate3, index3) in cate2.children" :key="cate3.cat_id" @click="toList(cate3.cat_name)">
                <img :src="cate3.cat_icon" alt="">
                <p>{{cate3.cat_name}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHotspot from '@/components/SearchHotspot'

export default {
  data () {
    return {
      activeIndex: 0,
      // 分类数据
      categories: [],
      isInit: false
    }
  },
  components: {
    SearchHotspot
  },
  onLoad () {
    this.getCategories()
  },
  methods: {
    // 请求轮播图数据
    getCategories () {
      this.$request({
        url: '/api/public/v1/categories'
      }).then(data => {
        console.log(data)
        this.categories = data
        this.isInit = true
      })
    },
    // 跳转到list页面
    toList (name) {
      wx.navigateTo({ url: '/pages/list/main?keyword=' + name })
    }
  }
}
</script>

<style lang="less">
  @red:#eb4450;

  .main{
    display: flex;
    color:#333;
    position:absolute;
    top:100rpx;
    left:0;
    right:0;
    bottom:0;
    font-size: 14px;
  }
  .left{
    width: 198rpx;
    overflow: auto;
    li{
      height: 100rpx;
      background-color: #f4f4f4;
      border-bottom: 1rpx solid #eee;
      box-sizing: border-box;
      line-height: 100rpx;
      text-align: center;
      &.active{
        color: @red;
        background-color: #fff;
        position: relative;
        &::before{
          position: absolute;
          content:'';
          width:8rpx;
          height: 60rpx;
          background-color: @red;
          left:0;
          top:20rpx;
        }
      }
    }
  }
  .right{
    flex:1;
    overflow: scroll;
    padding:20rpx 16rpx;
    box-sizing: border-box;
    height: 100%;
    >img{
      width: 520rpx;
      height: 180rpx;
    }
    .title{
      height: 110rpx;
      color:#e0e0e0;
      text-align: center;
      line-height: 110rpx;
      span{
        margin:0 30rpx;
        color:#333;
      }
    }
    .cate2>ul{
      display: flex;
      flex-wrap: wrap;
    }
    .cate3{
      width: 33.33%;
      text-align: center;
      margin-top:40rpx;
      img{
        width: 120rpx;
        height: 120rpx;
      }
      p{
        margin-top:14rpx;
      }
    }
  }
</style>