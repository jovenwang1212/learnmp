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

    wx.request({
      url: `${BASE_URL}${options.url}`,
      data: options.data || {},
      method: options.method,
      success: res => {
        const {meta, message} = res.data
        if (meta.status === 200) {
          resolve(message)
        } else {
          console.log(res)
        }
      },
      fail: (err) => {
        reject(err)
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
