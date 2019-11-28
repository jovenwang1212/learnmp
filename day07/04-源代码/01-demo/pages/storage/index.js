// pages/storage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  saveName() {
    wx.setStorage({
      key: 'name',
      data: 'Joven',
      success: function () {
        console.log('异步存储')
      }
    })
    console.log('下一句')
  },

  saveAge() {
    wx.setStorageSync('age', 28)
  },

  getAge() {
    // 异步取数据
    wx.getStorage({
      key: 'age',
      success: function (res) {
        console.log(res.data)
      },
    })

  },
  getName() {
    let name = wx.getStorageSync('name')
    console.log(name)
  },

  clear() {
    wx.clearStorageSync()
  },
  removeAge(){
    wx.removeStorageSync('age')
  },
  saveObj(){
    wx.setStorageSync('obj', {
      sex:'male',
      age:19,
      habbit:'Rap'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(localStorage)// undefined
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