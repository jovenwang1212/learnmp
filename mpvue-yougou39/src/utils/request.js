// 设置基地址
const BASE_URL = 'https://www.uinav.com'
function request (options) {
  return new Promise((resolve, reject) => {
    // 默认显示loading
    if (!options.noLoading) {
      wx.showLoading({
        mask: true
      })
    }
    wx.request({
      url: BASE_URL + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      // 不需要设置content-type
      success: res => {
        let { meta, message } = res.data
        if (meta.status === 200) {
          resolve(message)
        } else {
          wx.showToast({
            title: `[${meta.status}]${meta.msg}`,
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete () {
        if (!options.noLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}

export default request
