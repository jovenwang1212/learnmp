<template>
  <div class="header" @click="toSearch">
      <div class="inner">
        <icon type="search" size="16" color="#bbb"> </icon>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    toSearch () {
      wx.navigateTo({ url: '/pages/search/main' })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 100rpx;
  background-color: #eb4450;
  display: flex;
  align-items: center;
  padding: 0 16rpx;
  .inner {
    flex: 1;
    height: 60rpx;
    background-color: #fff;
    border-radius: 8rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #bbb;
    }
    icon {
      margin-right: 16rpx;
      margin-top: 10rpx;
    }
  }
}

</style>