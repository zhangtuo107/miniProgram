// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getGoods: []
  },
  subNum(e){
    var subIndex = e.currentTarget.dataset.index;
    var goodsList = this.data.getGoods;
    if (this.data.getGoods[subIndex].num > 1){
      this.data.getGoods[subIndex].num--;
    }else{
      this.data.getGoods.splice(subIndex,1);
    };
    var totalPrice = 0;
    var totalNum = 0;
    this.data.getGoods.forEach(item => {
      totalPrice += item.num * item.price;
      totalNum += item.num
    })
    this.setData({
      getGoods: this.data.getGoods,
      totalPrice,
      totalNum
    });
    wx.setStorageSync("price", this.data.getGoods);
  },
  addNum(e){
    var addIndex = e.currentTarget.dataset.index;
    var totalPrice = 0;
    var totalNum = 0;
    this.data.getGoods[addIndex].num++;
    this.data.getGoods.forEach(item => {
      totalPrice += item.num * item.price;
      totalNum += item.num
    })
    this.setData({
      getGoods: this.data.getGoods,
      totalPrice,
      totalNum
    });
    wx.setStorageSync("price", this.data.getGoods);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var useHeight;
    wx.getSystemInfo({
      success: function (res) {
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        useHeight = (windowHeight - 80)+'rpx';
      }
    });
    this.setData({
      useHeight
    })
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
    var that = this;
    var totalPrice = 0;
    var totalNum = 0;
    var getItem = wx.getStorageSync("price");
    if (getItem){
      getItem.forEach((item,index) => {
        totalPrice += item.num * item.price;
        totalNum += item.num;
      });
      this.setData({
        getGoods: getItem,
        totalPrice,
        totalNum
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