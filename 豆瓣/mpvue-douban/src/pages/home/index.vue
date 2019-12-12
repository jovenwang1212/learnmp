<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <span>豆瓣</span>
      <icon type="search"
            size="20"
            color="#00b600">
      </icon>
      <button size="mini">打开豆瓣App</button>
    </div>

    <!-- 中间内容 -->
    <div class="content">
      <div class="category"
           v-for="(category, k) in categoryList"
           :key="k">
        <div class="title">
          <span>{{category.name}}</span>
          <a :href="'/pages/more/main?type='+category.param">更多</a>
        </div>
        <!-- 横向滚动 -->
        <scroll-view class="scroll-view_H"
                     scroll-x="true"
                     bindscroll="scroll"
                     style="width: 100%">
          <view v-for="(item, i) in category.list"
                :key="item.id"
                class="scroll-view-item_H"
                @click="toDetail">
            <img :src="item.images.small"
                 alt="">
            <p class="name">{{item.title}}</p>
            <div class="rate">
              <template v-if="item.rating.average>0">
                <img v-for="(item, index) in item.scoreNum"
                     :key="index"
                     src="../../../static/images/star.svg"
                     alt="">
                <img v-for="(item, index) in (5-item.scoreNum)"
                     :key="index"
                     src="../../../static/images/unstar.svg"
                     alt="">
              </template>

              <span>{{item.rating.average>0?item.rating.average:'暂无评分'}}</span>
            </div>
          </view>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      categoryList: [
        {
          name: '影院热映',
          param: 'in_theaters',
          list: []
        },
        {
          name: `top250`,
          param: 'top250',
          list: []
        }
      ]
    }
  },

  created () {
    this.categoryList.forEach(v => {
      this.getMovieList(v)
    })
  },
  methods: {
    getMovieList (category) {
      request({
        url: `https://api.douban.com/v2/movie/${category.param}`,
        method: 'GET',
        data: {
          apikey: '0df993c66c0c636e29ecbb5344252a4a'
        },
        // 看实际情况是否需要写content-type
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: 'json'

      }).then(res => {
        let movieList = res.data.subjects
        movieList.forEach(v => {
          v.scoreNum = Math.ceil(v.rating.average / 2)
        })
        category.list = movieList
      })
    },
    // toMore (param) {
    //   wx.navigateTo({ url: `/pages/more/main?type=${param}` })
    // }

    toDetail () {
      wx.navigateTo({ url: '/pages/detail/main' })
    }
  }

}
</script>

<style lang="less">
.header {
  height: 94rpx;
  border-bottom: 1rpx solid #eee;
  color: #00b600;
  display: flex;
  align-items: center;
  padding: 0 36rpx;
  span {
    font-size: 22px;
  }
  icon {
    flex: 1;
    margin-top: 8rpx;
    margin-left: 28rpx;
  }
  button {
    background-color: #42bd56;
    color: #fff;
  }
}

.category {
  margin-bottom: 60rpx;
  .title {
    height: 86rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 38rpx;
    a {
      color: #42bd56;
    }
  }
}
.scroll-view_H {
  white-space: nowrap;
  margin-top: 12rpx;
  margin-left: 38rpx;
}

.scroll-view-item_H {
  display: inline-block;
  margin-left: 18rpx;
  text-align: center;

  img {
    width: 200rpx;
    height: 286rpx;
  }
  .name {
    margin-top: 20rpx;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rate {
    display: flex;
    margin-top: 4rpx;
    align-items: center;
    justify-content: center;
    img {
      width: 20rpx;
      height: 20rpx;
    }
    span {
      color: #aaa;
      margin-left: 10rpx;
    }
  }
}
</style>