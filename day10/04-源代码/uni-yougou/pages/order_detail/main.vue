<template>
  <div>
    <div class="order-status">待支付</div>
    <p>订单号:{{orderNumber}}</p>
    <div>
      <button>立即支付</button>
    </div>
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
    // 请求订单详情
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail () {
      this.$request({
        url: '/api/public/v1/my/orders/chkOrder',
        data: {
          order_number: this.orderNumber
        },
        isAuth: true,
        method: 'POST'
      }).then(data => {
        console.log(data)
      })
    }
  }
}
</script>
<style>
.order-status{
  text-align: center;
  margin-top:50rpx;
  margin-bottom:100rpx;
}
</style>