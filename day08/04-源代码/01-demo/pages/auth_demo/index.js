// pages/auth_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getWerun() {
    // 先授权，再调用接口
    wx.authorize({
      scope: 'scope.werun',
      success() {
        // 总是授权成功
        wx.getWeRunData({
          success(res) {
            console.log(res)
          }
        })
      }
    })
  },
  getAddr() {
    wx.getSetting({
      success(res) {
        // 从未发起授权undefined，授权允许true，授权拒绝false
        // console.log()
        if (res.authSetting['scope.address'] === false) {
          // 授权拒绝，提示
          wx.showModal({
            title: '提示',
            content: '请打开用户通讯地址权限',
            success(status){
              console.log(status)
              if(status.confirm){
                wx.openSetting({
                })
              }
            }
          })
        } else {
          // 先授权，再调用接口
          wx.authorize({
            scope: 'scope.address',
            success() {
              // 总是授权成功
              wx.chooseAddress({
                success(res) {
                  console.log(res)
                }
              })
            }
          })
        }
      }
    })
  },
  getInfo(res){
    console.log(res)
  },
  openSet() {
    wx.openSetting({
      success(res) {
        console.log(res)
      }
    })
  },
  queryAuth() {
    wx.getSetting({
      success(res) {
        console.log(res)
      }
    })
  },
  getLocation() {
    wx.getLocation({
      success: function (res) {
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})