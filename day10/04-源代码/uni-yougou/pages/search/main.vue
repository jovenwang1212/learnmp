<template>
  <div class="wrapper">
    <search @confirm="toList" :query="keyword"/>
    <div class="history-search">
      <div class="title">
        <span class="title">历史搜索</span>
        <icon type="clear"
              size="18" @click="clear">
        </icon>
      </div>
      <ul>
        <li v-for="(item,index) in keywordList" :key="item" @click="clickSearch(item,index)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'
export default {
  components: {
    Search
  },
  data () {
    return {
      keywordList: wx.getStorageSync('keywordList') || [],
      keyword: ''
    }
  },
  // 前一个页面back的时候，取storage数据
  onShow () {
    this.keywordList = wx.getStorageSync('keywordList') || []
    this.keyword = ''
  },
  methods: {
    clear () {
      wx.showModal({
        title: '提示', // 提示的标题,
        content: '你确定要删除所有历史搜索吗？', // 提示的内容,
        showCancel: true, // 是否显示取消按钮,
        cancelText: '取消', // 取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: '#000000', // 取消按钮的文字颜色,
        confirmText: '确定', // 确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#3CC51F', // 确定按钮的文字颜色,
        success: res => {
          if (res.confirm) {
            // 清空 keywordList
            wx.removeStorageSync('keywordList')
            this.keywordList = []
          }
        }
      })
    },
    toList (data) {
      // keyword的改动要设置，不然在search组件里面无法watch到query的改动
      this.keyword = data
      // data需要显示在历史搜索的第一个
      let _keywordList = [...this.keywordList]
      // 如果包含的话，先删除。直接插在前面
      let newKeywordList = _keywordList.filter(v => {
        return v !== data
      })

      newKeywordList.unshift(data)
      // 存storage
      wx.setStorageSync('keywordList', newKeywordList)

      wx.navigateTo({ url: '/pages/list/main?keyword=' + data })
    },
    clickSearch (item, index) {
      let _keywordList = [...this.keywordList]
      // 如果包含的话，先删除。直接插在前面
      _keywordList.splice(index, 1)

      _keywordList.unshift(item)
      // 存storage
      wx.setStorageSync('keywordList', _keywordList)
      wx.navigateTo({ url: '/pages/list/main?keyword=' + item })
    }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  position: relative;
  icon {
    position: absolute;
    top: 50rpx;
    left: 38rpx;
  }
  input {
    height: 60rpx;
    flex: 1;
    background-color: #fff;
    padding-left: 70rpx;
    box-sizing: border-box;
    border-radius: 4rpx;
  }
  button {
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
    border: 1rpx solid #bfbfbf;
    background-color: #eee;
    margin-left: 20rpx;
  }
}

.history-search {
  color: #333;
  font-size: 28rpx;
  padding: 30rpx 30rpx 30rpx 15rpx;
  .title {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30rpx;
    li {
      height: 64rpx;
      line-height: 64rpx;
      padding: 0 26rpx;
      background-color: #ddd;
      margin: 0 30rpx 16rpx 0;
    }
  }
}
</style>