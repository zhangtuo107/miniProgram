// pages/facePge/facePge.js
var uniqueMethod = require('../common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:[
      '../../images/my.jpg',
      '../../images/my.jpg',
      '../../images/my.jpg',
      '../../images/my.jpg'
    ],
    menuList:[
      {
        swiperImg:"../../images/secKill.jpg",
        title:"挑礼物1",
        price:20,
        id:1,
        num:1,
        size:37,
        source:4.3
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物2",
        price: 25,
        id: 2,
        num: 1,
        size: 37,
        source: 4.8
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物3",
        price: 30,
        id: 3,
        num: 1,
        size: 37,
        source: 4.0
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物4",
        price: 40,
        id: 4,
        num: 1,
        size: 37,
        source: 4.6
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物5",
        price: 50,
        id: 5,
        num: 1,
        size: 37,
        source: 3.5
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物6",
        price: 60,
        id: 6,
        num: 1,
        size: 37,
        source: 4.4
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物7",
        price: 70,
        id: 7,
        num: 1,
        size: 37,
        source: 4.5
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物8",
        price: 80,
        id: 8,
        num: 1,
        size: 37,
        source: 4.7
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物9",
        price: 90,
        id: 9,
        num: 1,
        size: 37,
        source: 3.6
      },
      {
        swiperImg: "../../images/secKill.jpg",
        title: "挑礼物10",
        price: 100,
        id: 10,
        num: 1,
        size: 37,
        source: 4.9
      }
    ],
    secondMenuList:[
      {
        swiperImg:"../../images/watch.jpg",
        price:"268",
        title: "手表1",
        num:1,
        id:11,
        size: 37,
        source: 4.3,
      },
      {
        swiperImg: "../../images/redWatch.jpg",
        price: "50",
        title: "手表1",
        num: 1,
        id: 12,
        size: 37,
        source: 4.3
      },
      {
        swiperImg: "../../images/watch.jpg",
        price: "268",
        title: "手表1",
        num: 1,
        id: 13,
        size: 37,
        source: 3.2
      },
      {
        swiperImg: "../../images/redWatch.jpg",
        price: "50",
        title: "手表1",
        num: 1,
        id: 14,
        size: 37,
        source: 2.5
      },
      {
        swiperImg: "../../images/watch.jpg",
        price: "268",
        title: "手表1",
        num: 1,
        id: 15,
        size: 37,
        source: 1.0
      },
      {
        swiperImg: "../../images/redWatch.jpg",
        price: "50",
        title: "手表1",
        num: 1,
        id: 16,
        size: 37,
        source: 2.9
      },
      {
        swiperImg: "../../images/redWatch.jpg",
        price: "268",
        title: "手表1",
        num: 1,
        id: 17,
        size: 37,
        source: 3.0
      },
      {
        swiperImg: "../../images/watch.jpg",
        price: "50",
        title: "手表1",
        num: 1,
        id: 18,
        size: 37,
        source: 4.3
      },
      {
        swiperImg: "../../images/redWatch.jpg",
        price: "268",
        num: 1,
        title: "手表1",
        id: 19,
        size: 37,
        source: 4.3
      },
      {
        swiperImg: "../../images/watch.jpg",
        price: "268",
        title: "手表1",
        num: 1,
        id: 20,
        size: 37,
        source: 4.3
      }
    ],
    goodsPrice:[]
  },
  clickgoods(e){
    var goodsInfo = e.currentTarget.dataset.goodsinfo;
    wx.setStorageSync('info', goodsInfo);
    wx.navigateTo({
      url: '../../pages/goodsDetail/goodsDetail',
    });
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var backItem = wx.getStorageSync("price");
    if (backItem) {
      this.setData({
        goodsPrice: backItem,
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})