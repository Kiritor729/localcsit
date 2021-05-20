// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    scanCode:'扫码开柜',
  },
  scanCodeEvent: function(){
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log("扫码成功："+JSON.stringify(res))
        that.setData({
          scanCode: res.result
        })
      }
    })
  }
})
