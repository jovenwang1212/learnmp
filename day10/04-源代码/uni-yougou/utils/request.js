// const BASE_URL = 'https://ugo.botue.com'
const BASE_URL = 'https://www.uinav.com'
function request (options) {
  // 开启loading
  if (!options.noLoading) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  }
	
  return new Promise((resolve, reject) => {
    // 如果options里面有isAuth，就传token
  // 如果无须登录态，token传空也可以的
    let token = ''
    if (options.isAuth) {
      token = wx.getStorageSync('token')
      // 如果需要登录态，但是没有token，跳转登录
      if (!token) {
        wx.navigateTo({ url: '/pages/login/main' })
				reject()
				return 
      }
    }

    wx.request({
      url: BASE_URL + options.url,
      data: options.data,
      method: options.method || 'GET',
      header: {
        Authorization: token
      },
      success: res => {
        let { meta, message } = res.data
        if (meta.status === 200) {
          // 成功的消息
          resolve(message)
        } else {
          // console.log('这里进入到success')
          wx.showToast({
            title: `[${meta.status}]${meta.msg}`, // 提示的内容,
            icon: 'none'
          })
          reject(meta)
        }
      },
      fail: () => {
        wx.showToast({
          title: `网络错误！`, // 提示的内容,
          icon: 'none'
        })
      },
      complete () {
        // 关闭loading
        if (!options.noLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}

export default request
