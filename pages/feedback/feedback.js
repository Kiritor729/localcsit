// pages/feedback/feedback.js
Page({
  onTapDayWeather(){
    wx.showToast({url:'/page/wallet/1/1'})
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
    data: {
      title: '',
      content: ''
    },
    inputTitle: function (e) {
      this.setData({
        title: e.detail.value
      })
    },
    inputContent: function (e) {
      this.setData({
        content: e.detail.value
      })
    },
    save: function (e) {
      var title = this.data.title;
      var content = this.data.content ;
      wx.navigateTo({
        url: '/pages/wallet/1/1',
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