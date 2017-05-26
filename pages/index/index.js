//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '您好',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getData: function() {
    wx.navigateTo({
      url: '../data/biz'
    })
  },
  submit: function () {
    wx.navigateTo({
      url: '../data/biz'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  formBindsubmit: function (e) {
    if (e.detail.value.userName.length == 0 || e.detail.value.psw.length == 0) {
      this.setData({
        tip: '提示：用户名和密码不能为空！',
        userName: '',
        psw: ''
      })
    } else {
      this.setData({
        tip: '',
        userName: '用户名：' + e.detail.value.userName,
        psw: '密码：' + e.detail.value.psw
      })
    }
  }
})

module.exports = {
 GetByParams(url,page=1,pageSize=20,search = ''){
  const params = { start: (page - 1) * pageSize, pageSize: pageSize }
  return getApi(url, search ? Object.assign(params, { q: search }) : params)
   .then(res => res.data)
 },
 GetById(url,id){
  return getApi(url, id)
   .then(res => res.data)
 }
}
