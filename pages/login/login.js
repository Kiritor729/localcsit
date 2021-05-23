
Page({
  data:{
    code:"",
    userInfo: {},
    hasUserUnfo: false
  },
  wxLogin: function() {
    wx.login({
      success: res => {
        if (res.code) {
          this.setData({code:res.code,})
          var app = getApp()
          app.data.code = res.code
          console.log(res)
          if (app.data.code) {
            console.log(app.data.code)
            wx.request({
              method:'get',
              url: 'http://localhost:3000/weixin?code=' + app.data.code,
              // data: app.data.code,
              success:function(res){
                console.log(res.data)
                wx.setStorageSync('openid', res.data.openid);
              }
            })
          }
        } else {
          console.log("登陆失败")
        }
      }
    })
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        var app = getApp();
        app.data.userInfo=res.userInfo
        app.data.hasUserInfo=this.data.hasUserInfo;
        console.log(res.userInfo)
        console.log(app.data)
        wx.switchTab({
          url: '/pages/mine/mine',
        })
      }
    })
    
  },
  submit: function(e) {
    var app = getApp()
    wx.request({
      method:'get',
      url: 'http://localhost:3000/weixin',
      data: app.data.code,
      success:function(res){
        console.log(res)
      }
    })
  }
})

