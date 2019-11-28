<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">点我登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    getUserInfo (userInfoRes) {
      // 获取微信里面的用户信息
      console.log(userInfoRes.mp.detail)
      let detail = userInfoRes.mp.detail
      // 获取到微信用户唯一标识
      wx.login({
        success: loginRes => {
          console.log(loginRes)
          // 发送登录请求
          this.$request({
            url: '/api/public/v1/users/wxlogin',
            method: 'POST',
            data: {
              code: loginRes.code,
              encryptedData: detail.encryptedData,
              iv: detail.iv,
              rawData: detail.rawData,
              signature: detail.signature
            }
          }).then(data => {
            // console.log(data)
            wx.setStorageSync('token', data.token)
            // 存储用户信息
            wx.setStorageSync('userInfo', detail.userInfo)
            wx.navigateBack()
          })
        }
      })
    }
  }
}
</script>

<style>
</style>