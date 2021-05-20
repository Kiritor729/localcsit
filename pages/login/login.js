Page({
  data:{
    userInfo: {},
    hasUserUnfo: false
  },
  wxLogin: function() {
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res)
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        } else {
          console.log("登陆失败")
        }
      }
    })
  },
  submit: function(e) {
    wx.request({
      method:'post',
      url: '',
      data: e.detail.value,
      success:function(res){
        console.log(res)
      }
    })
  }
})

