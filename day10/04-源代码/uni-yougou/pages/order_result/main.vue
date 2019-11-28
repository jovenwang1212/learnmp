<template>
  <div>
    <button @click="toHome">首页</button>
    <button v-if="orderNumber" @click="toOrderDetail">查看订单详情</button>
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
    wx.setNavigationBarTitle({ title: this.orderNumber ? '订单失败' : '订单成功' })
  },
  methods: {
    toHome () {
      wx.switchTab({ url: '/pages/home/main' })
    },
    toOrderDetail () {
      wx.navigateTo({ url: '/pages/order_detail/main' })
    }
  }

}
</script>
<style>
</style>