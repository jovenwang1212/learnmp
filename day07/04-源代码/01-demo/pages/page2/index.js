// pages/page2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    console.log('页面2加载')
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
    console.log('页面2显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面2隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面2销毁')
  },
  back(){
    wx.navigateBack()
  },
  switchTab2(){
    wx.switchTab({
      url: '/pages/tab2/index',
    })
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