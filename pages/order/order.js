// pages/order/order.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    currtab: 1,
    swipertab: [{ location: '已完成', index: 1 }, { location: '待付款', index: 2 }, { location: '已取消', index: 3 }],
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
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },
 
  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },
 
  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },
 
  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
  },
 
  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.allShow()
        break;
      case 1:
        that.alreadyShow()
        break
      case 2:
        that.waitPayShow()
        break
      case 3:
        that.lostShow()
        break
    }
  },
  allShow: function(){
    this.setData({
      
    })
  },
  alreadyShow: function(){
    this.setData({
      alreadyOrder: [
        { location: "武汉科技大学南区第三台",
          state: "交易成功",
          store: "01",
          stime: "2021/04/14 21:21:06",
          etime: "2021/04/14 21:58:04",
          price: "￥2.00元/小时",
          orderid: "20210414212059232179",
          money: "2.00" 
        }, {
          location: "武汉科技大学南区第一台",
          state: "交易成功",
          store: "16",
          stime: "2021/04/04 17:12:32",
          etime: "2021/04/04 17:58:56",
          price: "￥1.50元/小时",
          orderid: "20210404171056658535",
          money: "1.50" }]
    })
  },
 
  waitPayShow:function(){
    this.setData({
      waitPayOrder: [{
        location: "武汉科技大学北区第一台",
        state: "待付款",
        store: "10",
        stime: "2021/05/28 09:31:06",
        etime: "2021/05/28 10:21:54",
        price: "￥2.00元/小时",
        orderid: "20210528092915756234",
        money: "2.00" }],
    })
  },
 
  lostShow: function () {
    this.setData({
      lostOrder: [{
        location: "武汉科技大学南区第一台",
        state: "已取消",
        store: "05",
        stime: "2021/03/20 13:38:40",
        etime: "2021/03/20 15:18:23",
        price: "￥2.00元/小时",
        orderid: "20210320133746521236",
        money: "4.00" }],
    })
  },
 
  
})