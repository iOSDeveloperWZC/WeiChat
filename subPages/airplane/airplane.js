Page({
  data:{
    name:"王宗成"
  },
  
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '杭州信使网络', // 分享标题
      desc: '小程序', // 分享描述
      path: 'subPages/airplane/airplane' // 分享路径
    }
  }
})