<template>
  <div v-if="categoryList[1].list.length">
    <div class="header">
      <span>豆瓣</span>
      <icon color="#00b600"
            type="search"
            size="16">
      </icon>
      <button>打开豆瓣App</button>
    </div>
    <!-- 影院热映 -->
    <div class="movie-item"
         v-for="(cate,i) in categoryList"
         :key="cate.name">
      <p class="title">
        <span>{{cate.name}}</span>
        <span class="more-link"
              @click="toMore(cate.param)">更多</span>
      </p>

      <scroll-view class="scroll-view_H"
                   scroll-x="true"
                   style="width: 100%">
        <view class="scroll-view-item_H"
              v-for="item in cate.list"
              :key="item.id">
          <img :src="item.images.large"
               alt="">
          <p>{{item.title}}</p>
          <div class="rating">
            <div class="stars"
                 v-if="item.rating.average">
              <img v-for="(item2, index2) in item.starNum"
                   :key="index2"
                   src="../../../static/images/star.svg"
                   alt="">
              <img v-for="(item2, index2) in 5-item.starNum"
                   :key="index2"
                   src="../../../static/images/unstar.svg"
                   alt="">
            </div>
            <span class="num">{{item.rating.average?item.rating.average:'暂无评论'}}</span>
          </div>
        </view>
      </scroll-view>
    </div>
  </div>
</template>

<script>
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
          name: 'TOP250',
          param: 'top250',
          list: []
        }
      ]
    }
  },
  created () {
    this.categoryList.forEach(v => {
      this.getMovies(v)
    })
  },
  methods: {
    toMore (param) {
      wx.navigateTo({ url: '/pages/more/main?param=' + param })
    },
    getMovies (cate) {
      this.$request({
        url: `/v2/movie/${cate.param}?apikey=0df993c66c0c636e29ecbb5344252a4a`
      }).then(res => {
        console.log(res)
        let movies = res.data.subjects
        movies.forEach(v => {
          v.starNum = Math.ceil(v.rating.average / 2)
        })
        cate.list = res.data.subjects
      })
    }
  }

}
</script>

<style lang="less">

.header {
  display: flex;
  border-bottom: 1rpx solid #eee;
  align-items: center;
  padding: 0 36rpx;
  height: 94rpx;
  span {
    color: #00b600;
    font-size: 40rpx;
  }
  icon {
    flex: 1;
    margin-left: 28rpx;
    margin-top: 10rpx;
  }
  button {
    width: 200rpx;
    height: 58rpx;
    line-height: 58rpx;
    border: 8rpx;
    color: #fff;
    background-color: #42bd56;
    font-size: 22rpx;
  }
}

.movie-item {
  .title {
    height: 87rpx;
    display: flex;
    justify-content: space-between;
    padding: 0 36rpx;
    align-items: center;
    .more-link {
      color: #42bd56;
    }
  }
}

.scroll-view_H {
  white-space: nowrap;
  margin-top: 12rpx;
  margin-bottom: 62rpx;
}
.scroll-view-item_H {
  display: inline-block;

  margin-left: 18rpx;
  > img {
    width: 200rpx;
    height: 286rpx;
  }
  > p {
    margin-top: 20rpx;
    text-align: center;
    font-size: 24rpx;
    width: 200rpx;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    .num {
      margin-left: 8rpx;
      color: #aaa;
    }
  }
  .stars {
    display: flex;
    img {
      width: 20rpx;
      height: 20rpx;
    }
  }
}
</style>


