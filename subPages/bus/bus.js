Page({
  data:{
    
    height:200,
    startLocation:"杭州",
    endLocation:"遵义",
    currentDate:"2017-02-20",
    selectDate:"2017-02-20"
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
 
    var that=this
    wx.getSystemInfo({

      success:function(res){
          that.setData({
            height:res.windowHeight,
            startLocation:"杭州",
            endLocation:"遵义"
          })
      }
    })
    Date.prototype.format=function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
    var date = new Date().format("yyyy-MM-dd")
    console.log(date)
    that.setData({
      currentDate:date,
      selectDate:date

    })
  },
  bindDateChange:function(event){

    var that=this
    that.setData({
      selectDate:event.detail.value
    })

  }
})