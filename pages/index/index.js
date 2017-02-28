//index.js
//获取应用实例
var app = getApp()
Page({
  //初始化数据
  data: {
    arr:[
      {
        id:"hotel",
        color:"#FF5F72",
        image:"../../image/hotel.png",
        title:"酒店",
        subTitle:"国内/海外/特价/名宿",
        ur:'../../subPages/hotel/hotel'
      },
      {
        id:"airline",
        color:"#31A4FF",
        image:"airline.png",
        title:"机票",
        subTitle:"极速预定/品质飞行",
        ur:'../../subPages/airplane/airplane'
      },
      {
        id:"train",
        color:"#2FC4FD",
        image:"../../image/train.png",
        title:"火车票",
        subTitle:"24H预定/极速抢票",
        ur:'../../subPages/train/train'
      },
      {
        id:"bus",
        color:"#20D4E8",
        image:"../../image/bus.png",
        title:"汽车票",
        subTitle:"官方授权/覆盖全国",
        ur:'../../subPages/bus/bus'
      },
      {
        id:"tourist",
        color:"#46DCAE",
        image:"../../image/tourist.png",
        title:"景点门票",
        subTitle:"景区演出/餐饮/娱乐/服务",
        ur:'../../subPages/tourist/tourist'
      }
    ]
  },

  onLoad: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: 'pages/index/index'
    }
  }
})

