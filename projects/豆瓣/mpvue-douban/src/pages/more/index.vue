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
    <div class="content">
      <p class="title">{{title}}</p>
      <div class="movie-list">
        <view v-for="(item, i) in movieList"
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
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      movieList: [],
      title: ''
    }
  },
  onLoad (options) {
    console.log(options)
    this.getMovieList(options.type || 'in_theaters')
    this.title = options.type === 'in_theaters' ? '影院热映' : 'Top250'
  },
  methods: {
    getMovieList (type) {
      request({
        url: `https://api.douban.com/v2/movie/${type}`,
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
        this.movieList = movieList
      })
    },
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

.content {
  padding: 0 44rpx;
  .title {
    height: 144rpx;
    line-height: 144rpx;
    font-size: 24px;
  }
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.scroll-view-item_H {
  display: inline-block;
  text-align: center;
  margin-bottom: 52rpx;

  img {
    width: 180rpx;
    height: 260rpx;
  }
  .name {
    margin-top: 14rpx;
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