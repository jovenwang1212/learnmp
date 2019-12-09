<template>
  <div>
    <div class="topHeader" :style="{position:isFixed?'fixed':'static'}">
      <!-- <div class="header">
      <icon type="search" size="16" color="#bdbdbd"> </icon>
      <input type="text" v-model="query" @confirm="reload" confirm-type="search"/>
    </div> -->
    <SearchBar @confirm="search" :query="query"/>

    <!-- 过滤栏 -->
    <ul class="filter-menu">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        :class="{active:acitveIndex === index}"
        @click="changeIndex(index)"
      >
        {{ item }}
      </li>
    </ul>
    </div>

    <ul class="goods-list" :style="{marginTop:isFixed?'220rpx':'0'}">
      <li class="goods" v-for="(item, index) in goodsList" :key="index" @click="toItem(item.goods_id)">
        <img
          :src="item.goods_small_logo"
          alt=""
        />
        <div class="right">
          <p class="text-line2">
            {{item.goods_name}}
          </p>
          <span class="price">￥<span class="num">{{item.goods_price}}</span>.00</span>
        </div>
      </li>
    </ul>
    <div class="hasBtm" v-show="isLastPage">--我是有底线的--</div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
const PAGE_SIZE = 6
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      menuList: ['综合', '销量', '价格'],
      acitveIndex: 0,
      query: '',
      goodsList: [],
      isLastPage: false,
      isFixed: false
    }
  },
  onLoad (options) {
    this.query = options.query
    this.reload()
  },
  onPullDownRefresh () {
    this.isFixed = false
    //  加载第一页
    this.reload()
  },
  onPageScroll () {
    this.isFixed = true
  },
  // 上拉加载下一页
  onReachBottom () {
    this.pageNum++
    this.queryGoodsList()
  },
  methods: {
		changeIndex(index){
			this.acitveIndex = index
		},
    search (data) {
      this.query = data
      this.reload()
    },
    // 去到商品详情
    toItem (id) {
      wx.navigateTo({ url: '/pages/item/main?id=' + id })
    },
    reload () {
      //  加载第一页
      this.pageNum = 1
      this.isLastPage = false
      this.isRequest = false
      this.goodsList = []
      this.queryGoodsList()
    },
    queryGoodsList () {
      // 如果请求中，就不再请求
      if (this.isRequest || this.isLastPage) {
        return
      }

      this.isRequest = true
      this.$request({
        url: '/api/public/v1/goods/search',
        data: {
          query: this.query,
          pagenum: this.pageNum,
          pagesize: PAGE_SIZE
        }
      }).then(data => {
        // console.log(data)
        this.goodsList = [...this.goodsList, ...data.goods]
        // 判断是否到了最后一页
        if (this.goodsList.length === data.total) {
          this.isLastPage = true
        }
      }).finally(() => {
        // 请求完成后，允许再请求了
        this.isRequest = false
      })
    }
  }
}
</script>

<style lang="less">
@import url('../../css/base.less');
@import url('./index.less');
</style>
