// pages/event_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

// 事件处理方法声明和data是平级的
  sayHello(){
    // console.log('点疼我了')
    // alert('点疼我了')
    wx.showToast({
      // 标题
      title: '点疼我了',
      // 图标
      icon:'none',
      // 显示时长
      duration:3000,
      // 是否有遮罩
      mask:false
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