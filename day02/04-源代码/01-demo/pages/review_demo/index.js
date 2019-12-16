// pages/review_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'是兄弟一起来玩贪玩蓝月',
    songList:[
      {
        name:'两只蝴蝶',
        id:1
      },
      {
        name: '两只老虎',
        id: 2
      },
      {
        name: '等你下课',
        id: 3
      },
      {
        name: '放学别走',
        id: 4
      }
    ],
    isRed:true
  },

  sayHello(){
    wx.showToast({
      title: '点疼我了',
    })
  },
  changeColor(){
    // this.isRed=!this.isRed
    this.setData({
      isRed:!this.data.isRed
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