function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const API_URL = 'https://import.xiaohujr.com/comimport/order/status' 
function getData(url, params) {
  return new Promise((res, rej) => {
    wx.request({
      url: 'https://import.xiaohujr.com/comimport/order/status',
      data: Object.assign({}, params),
      header: { 'content-type': 'application/json' },
      success: res,
      fail: rej
    })
  }).then(res => res.data)
}  

module.exports = {
  formatTime: formatTime,
  getData: getData
}
