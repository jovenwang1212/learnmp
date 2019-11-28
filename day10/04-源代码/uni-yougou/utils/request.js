import Vue from 'vue'
const BASE_URL = 'https://www.uinav.com'
// const BASE_URL = 'https://autumnfish.cn/wx/'

export default function request (options) {
  return new Promise((resolve, reject) => {
    // 请求发出前loading,默认有loading

    if (!options.noLoading) {
      wx.showLoading({
        title: ''
      })
      // wx.showNavigationBarLoading()
    }
    let token = ''
    if (options.isAuth) {
      token = wx.getStorageSync('token')
      // 如果没有token，跳转登录、
      if (!token) {
        wx.navigateTo({ url: '/pages/login/main' })
        return
      }
    }

    wx.request({
      url: `${BASE_URL}${options.url}`,
      data: options.data || {},
      method: options.method,
      header: {
        'Authorization': token
      },
      success: res => {
        const {meta, message} = res.data
        if (meta.status === 200) {
          resolve(message)
        } else if (meta.status === 401) {
          // 去登陆页面
          wx.navigateTo({ url: '/pages/login/main' })
        } else {
          Vue.prototype.$showToast(`[${meta.status}]${meta.msg}`)
        }
      },
      fail: (err) => {
        Vue.prototype.$showToast(err.errMsg)
        // reject(err)
      },
      complete () {
        // 请求完成后关闭loading
        if (!options.noLoading) {
          wx.hideLoading()
          // wx.hideNavigationBarLoading()
        }
      }
    })
  })
}
