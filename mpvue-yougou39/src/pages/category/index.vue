<template>
  <div>
    <SearchHotspot />
    <!-- 主体部分 -->
    <div class="main" v-if="categories.length">
      <div class="left">
        <ul>
          <li :class="{active:activeIndex===index1}" v-for="(cate1,index1) in categories"
              :key="cate1.cat_id" @click="activeIndex=index1">{{cate1.cat_name}}</li>
        </ul>
      </div>
      <div class="right">
        <img src="/static/images/titleimage.png"
             alt="">
        <ul>
          <li class="cate2"
              v-for="(cate2, index2) in categories[activeIndex].children"
              :key="index2">
            <p>/<span>{{cate2.cat_name}}</span>/</p>
            <ul>
              <li class="cate3"
                  v-for="(cate3, index3) in cate2.children"
                  :key="index3">
                <img :src="cate3.cat_icon"
                     alt="">
                <span>{{cate3.cat_name}}</span>
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
  components: {
    SearchHotspot
  },
  data () {
    return {
      // 当前选中的一级分类的index
      activeIndex: 0,
      categories: []
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      this.$request({
        url: '/api/public/v1/categories'
      }).then(data => {
        this.categories = data
        // console.log(data)
      })
    }
  }
}
</script>

<style lang="less">
.main {
  display: flex;
  position: absolute;
  top: 100rpx;
  bottom: 0;
  width: 100%;
  .left {
    width: 198rpx;
    height: 100%;
    overflow: scroll;
    li {
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
      background-color: #f4f4f4;
      border-bottom: 1rpx solid #eee;
      box-sizing: border-box;
      &.active {
        color: #eb4450;
        background-color: #fff;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 8rpx;
          height: 60rpx;
          background-color: #eb4450;
          left: 0;
          top: 20rpx;
        }
      }
    }
  }
}

.right {
  flex: 1;
  padding: 20rpx 16rpx;
  height: 100%;
  overflow: scroll;
  > img {
    width: 520rpx;
    height: 180rpx;
  }
  .cate2 {
    margin-bottom: 20rpx;
    p {
      color: #e0e0e0;
      height: 110rpx;
      line-height: 110rpx;
      text-align: center;
      span {
        color: #333;
        padding: 0 30rpx;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .cate3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    margin-top: 30rpx;
    > img {
      width: 120rpx;
      height: 120rpx;
    }
    span {
      font-size: 24rpx;
    }
  }
}
</style>