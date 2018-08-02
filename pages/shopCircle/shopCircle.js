// pages/shopCircle/shopCircle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleList:[
      {
        peopleImg:'../../images/girl01.png',
        peopleName:'江江江Y',
        peopleDescript:'对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg:[
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg:'../../images/kouhong02.jpg',
        goodsTitle:'【支持白条 2支减5元】法国迪奥',
        goodsPrice:400,
        shareMethods:'晒单',
        visitedNum:15,
        likeNum:6
      },
      {
        peopleImg: '../../images/girl02.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 16,
        likeNum: 9
      },
      {
        peopleImg: '../../images/girl03.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 17,
        likeNum: 12
      },
      {
        peopleImg: '../../images/boy01.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 18,
        likeNum: 16
      },
      {
        peopleImg: '../../images/boy02.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 19,
        likeNum: 26
      },
      {
        peopleImg: '../../images/boy03.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 26,
        likeNum: 66
      },
      {
        peopleImg: '../../images/boy04.png',
        peopleName: '江江江Y',
        peopleDescript: '对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了，对这种正红色的口红毫无抵抗力，太好了！！！',
        shareImg: [
          '../../images/kouhong01.jpg',
          '../../images/kouhong02.jpg'
        ],
        goodsImg: '../../images/kouhong02.jpg',
        goodsTitle: '【支持白条 2支减5元】法国迪奥',
        goodsPrice: 400,
        shareMethods: '晒单',
        visitedNum: 36,
        likeNum: 25
      }
    ],
    prewImg:[
      'http://a3.topitme.com/1/21/79/1128833621e7779211o.jpg',
      'http://f2.topitme.com/2/6a/bc/113109954583dbc6a2o.jpg'
    ]
  },
  prewImg(e) {
    var imgIndex = e.currentTarget.dataset.index;
    wx.previewImage({
      current: this.data.prewImg[imgIndex],
      urls: this.data.prewImg,
      success(){

      }
    });
  },
  getIndex(e) {
    this.setData({
      arrIndex: e.currentTarget.dataset.itemindex
    })
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