<template>
  <div>
    <button  open-type="getUserInfo"
      @getuserinfo="getUserInfo">点我登录</button>
  </div>
</template>

<script>
export default{
  methods: {
    getUserInfo (info) {
      // console.log(info)
      let detail = info.mp.detail
      console.log(detail)
      // 获取用户凭证
      wx.login({
        success: loginRes => {
          // console.log(loginRes)
          let code = loginRes.code

          // 调后端接口了
          this.$request({
            url: '/api/public/v1/users/wxlogin',
            method: 'POST',
            data: {
              code,
              encryptedData: detail.encryptedData,
              iv: detail.iv,
              rawData: detail.rawData,
              signature: detail.signature
            }
          }).then(data => {
            // console.log(data)
            wx.setStorageSync('userInfo', detail.userInfo)
            wx.setStorageSync('token', data.token)
            setTimeout(() => {
              wx.navigateBack()
            }, 1000)
          })
        }
      })
    }
  }
}
</script>

<style>
</style>