const heroDetailList = require('../../data/lol_details_duowan.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero:{}
  },
  change(e){
    console.log(e.detail.current)
    let count =0
    if(e.detail.current==1){
      count++
    }

    console.log('...   '+count)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    // for(let i=0;i<heroDetailList.length;i++){
    //   if(heroDetailList[i].id===options.id){
    //     this.setData({
    //       hero:heroDetailList[i]
    //     })
    //   }
    // }
    // heroDetailList.find(v=>{
    //   return v.id ===options.id
    // })
    let hero = heroDetailList.find(v=>v.id===options.id)
    this.setData({
      hero
    })

    wx.setNavigationBarTitle({
      title: hero.title+'-'+hero.name,
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