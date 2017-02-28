//logs.js
var app = getApp()
Page({
  data: {
    array:[{
      image:"all.png",
      title:"全部订单"
    },{
      image:"hotel1.png",
      title:"酒店订单订单"
    }, {
      image:"airplane1.png",
      title:"机票订单"
    }, {
      image:"train1.png",
      title:"火车票订单"
    }, {
      image:"bus1.png",
      title:"汽车票订单"
    }, {
      image:"tourist1.png",
      title:"门票订单"
    }, {
      image:"card1.png",
      title:"优惠券"
    }
    ],
    userInfo:{}
  }
  ,
  loginMethod:function(){
   
   var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
