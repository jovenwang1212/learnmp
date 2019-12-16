const heroDetailList = require('../../data/lol_details_duowan.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.id)
    let id = options.id

    //根据id查找heroDetailList里面id相等的，那一项
    /*
    for(let hero of heroDetailList){
      console.log(hero)
      if(hero.id ===id){
        this.setData({
          hero
        })
        return
      }
    }
    */
    let hero = heroDetailList.find(v => v.id === id)

    this.setData({
      hero
    })
    wx.setNavigationBarTitle({
      title: `${hero.title}-${hero.name}`,
    })
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