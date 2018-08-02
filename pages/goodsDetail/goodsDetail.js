// pages/goodsDetail/goodsDetail.js
var uniqueMethod = require('../common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsPrice: []
  },
  addCart() {
    this.data.goodsPrice.push(this.data.goodsDetail);
    var getList = this.data.goodsPrice;
    wx.setStorageSync("price", uniqueMethod.isUnique(getList));
    wx.switchTab({
      url: '/pages/cart/cart'
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
    var price = wx.getStorageSync("price");
    var info = wx.getStorageSync("info");
    var newObj = Object.assign({},info);
    var starWidth = Number(info.source) * 40 + "rpx";
    this.setData({
      goodsDetail: newObj,
      starWidth
    });
    if (price){
      this.setData({
        goodsPrice: price
      })
    };
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