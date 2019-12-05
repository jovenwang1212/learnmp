// pages/storage_demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  saveName(){
    wx.setStorage({
      key: 'name',
      data: 'joven',
      success:()=>{
        console.log('存储成功')
      }
    })
    console.log('下一行')
  },
  saveAge(){
    wx.setStorageSync('age', 22)
    console.log('下一行')
  },
  getName(){
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res.data)
      },
    })
  },

  getAge(){
    let age = wx.getStorageSync('age')
    console.log(age)
  },
  // storage所有存储的信息
  getInfo(){
    let info = wx.getStorageInfoSync()
    console.log(info)
  },
  removeName(){
    wx.removeStorageSync('name')
  },
  clearStorage(){
    wx.clearStorageSync()
  },
  setObj(){
    wx.setStorageSync('person', {
      name:'xjj',
      age:28,
      hasGF:true
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