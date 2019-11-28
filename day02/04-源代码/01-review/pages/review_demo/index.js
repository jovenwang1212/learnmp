// pages/review_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'这是一个寂寞的天',
    movieList:[
      {
        id:'111',
        name:'我和我的祖国'
      },
      {
        id:'222',
        name:'冰雪奇缘'
      },
      {
        id:'333',
        name:'海上钢琴师'
      },
      {
        id:'444',
        name:'两只老虎'
      },
    ],
    num:999

  },
  doSth(){
    wx.showToast({
      title: '有点文案',
    })
  },
  add(){
    this.setData({
      num:++this.data.num
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