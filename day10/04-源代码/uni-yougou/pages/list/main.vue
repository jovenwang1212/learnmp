<template>
  <div>
    <div class="header" :style="{position:isFixed?'fixed':'static'}">
      <!-- 头部 -->
      <!-- <div class="search">
        <icon type="search"
              size="18">
        </icon>
        <input type="text"
               v-model="keyword"
               confirm-type="search"
               @confirm="inputHandler">
      </div> -->
      <!-- 3.把组件名当标签使用 -->
      <Search @confirm="inputHandler" :query="keyword"/>


      <!-- filter -->
      <ul class="nav">
        <li v-for="(item,index) in navArr"
            :key="item"
            @click="activeIndex=index"
            :class="{active:activeIndex===index}">{{item}}</li>
      </ul>
    </div>

    <!-- 商品列表 -->
    <ul class="goods-list" :style="{marginTop:isFixed?'220rpx':'0'}">
      <li v-for="(item, index) in goodsList"
          :key="index" @click="toItem(item.goods_id)">
        <img :src="item.goods_big_logo"
             :alt="item.goods_name">
        <div class="right">
          <p class="goods-name text-line2">{{item.goods_name}}</p>
          <p class="price">￥<span>{{item.goods_price}}</span>.00</p>
        </div>
      </li>
    </ul>
    <!-- 提示没有数据了 -->
    <p class="tip"
       v-show="isLastPage">--我是有底线的--</p>
  </div>
</template>

<script>
// 1.引入
import Search from '@/components/search'
const PAGE_SIZE = 6
export default {
  // 2.注册组件
  components: {
    // 组件名:组件
    // Search: Search
    Search
  },
  data () {
    return {
      navArr: [
        '综合',
        '销量',
        '价格'
      ],
      activeIndex: 0,
      // 搜索关键字
      keyword: '',
      // 搜索结果列表
      goodsList: [],
      isLastPage: false,
      isFixed: false
    }
  },
  onLoad (options) {
    // console.log(options.keyword)
    this.keyword = options.keyword
    this.isRequest = false
    this.reload()
  },
  onPullDownRefresh () {
    this.isFixed = false
    this.reload()
  },
  // 上拉加载下一页
  onReachBottom () {
    this.pageNum++
    this.search()
  },
  onPageScroll () {
    this.isFixed = true
  },
  methods: {
    // 跳转商品详情
    toItem (goodsId) {
      wx.navigateTo({ url: '/pages/item/main?goodsId=' + goodsId })
    },
    inputHandler (data) {
      this.keyword = data
      this.reload()
    },

    reload () {
      this.isLastPage = false
      // ==============================
      this.goodsList = [] // 清空
      // ==============================
      this.pageNum = 1
      this.search()
    },
    // 根据关键字查询商品
    search () {
      // 如果请求中或者是最后一页，就不发请求
      if (this.isRequest || this.isLastPage) {
        return
      }
      // 发请求前，isRequest置为true
      this.isRequest = true
      this.$request({
        url: '/api/public/v1/goods/search',
        // noLoading: true,
        data: {
          query: this.keyword,
          pagesize: PAGE_SIZE,
          pagenum: this.pageNum
        }
      }).then(data => {
        // console.log(data)
        this.goodsList = [...this.goodsList, ...data.goods]
        // 这里判断是不是最后一页
        if (this.goodsList.length === data.total) {
          this.isLastPage = true
        }
      }).finally(() => {
        // 请求完，isRequest为false
        this.isRequest = false
      })
    }
  }

}
</script>

<style lang="less">
.header{
  position: fixed;
  width: 100%;
  background-color: #fff;
  top:0;
}
.search {
  height: 120rpx;
  padding: 0 16rpx;
  background-color: #eee;
  display: flex;
  align-items: center;
  position: relative;
  icon {
    position: absolute;
    top: 46rpx;
    left: 46rpx;
  }
  input {
    height: 60rpx;
    background-color: #fff;
    border-radius: 8rpx;
    width: 100%;
    font-size: 24rpx;
    padding-left: 76rpx;
  }
}

.nav {
  display: flex;
  justify-content: space-around;
  height: 100rpx;
  align-items: center;
  border: 1rpx solid #ddd;
  .active {
    color: #eb4450;
  }
}

.goods-list {
  margin-top:220rpx;
  li {
    height: 262rpx;
    border-bottom: 1rpx solid #ddd;
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    img {
      width: 200rpx;
      height: 200rpx;
      margin-right: 24rpx;
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .goods-name {
      font-size: 16px;
    }
    .price {
      color: #eb4450;
      font-size: 12px;
      margin-top: 54rpx;
      span {
        font-size: 24px;
      }
    }
  }
}
.tip {
  text-align: center;
  color: #ccc;
}
</style>