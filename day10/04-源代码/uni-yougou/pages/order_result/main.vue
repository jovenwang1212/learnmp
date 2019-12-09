<template>
  <div>
    <button @click="toIndex">首页</button>
    <button @click="toOrderDetail" v-if="orderNumber">查看订单详情</button>
    <div>一些广告。。。</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderNumber: ''
    }
  },
  onLoad (options) {
    this.orderNumber = options.orderNumber
    // 设置标题
    wx.setNavigationBarTitle({ title: this.orderNumber ? '支付失败' : '支付成功' })
  },
  methods: {
    toIndex () {
      // 跳转到首页
      wx.switchTab({ url: '/pages/home/main' })
    },
    toOrderDetail () {
    // 跳转订单详情，传递orderNubmer
      wx.navigateTo({ url: '/pages/order_detail/main?orderNumber=' + this.orderNumber })
    }
  }
}
</script>
<style>
</style>