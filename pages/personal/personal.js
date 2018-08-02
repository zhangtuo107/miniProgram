// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[
      {
        orderPath:'../../images/waitPay.png',
        orderTitle:'待付款'
      },
      {
        orderPath: '../../images/waitPay.png',
        orderTitle: '待收货'
      },
      {
        orderPath: '../../images/waitPay.png',
        orderTitle: '待评价'
      },
      {
        orderPath: '../../images/waitPay.png',
        orderTitle: '退换/售后'
      },
      {
        orderPath: '../../images/waitPay.png',
        orderTitle: '全部订单'
      }
    ],
    assetList:[
      {
        assetNum:'3张',
        assetTitle:'京东券'
      },
      {
        assetNum: '3亿',
        assetTitle: '账户余额'
      },
      {
        assetNum: '999个',
        assetTitle: '京豆'
      },
      {
        assetNum: '3张',
        assetTitle: '礼品卡'
      },
      {
        assetNum: '3亿',
        assetTitle: '我的资产'
      }
    ],
    trackList: [
      {
        trackNum: '30',
        trackTitle: '商品收藏'
      },
      {
        trackNum: '99',
        trackTitle: '店铺收藏'
      },
      {
        trackNum: '999',
        trackTitle: '搭配收藏'
      },
      {
        trackNum: '1000',
        trackTitle: '我的足迹'
      }
    ],
    myCar: [
      {
        myCarPath: '../../images/car.png',
        myCarTitle: '我的爱车'
      },
      {
        myCarPath: '../../images/car.png',
        myCarTitle: '我的爱车'
      },
      {
        myCarPath: '../../images/car.png',
        myCarTitle: '我的爱车'
      },
      {
        myCarPath: '../../images/car.png',
        myCarTitle: '我的爱车'
      },
      {
        myCarPath: '../../images/car.png',
        myCarTitle: '我的爱车'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              });
            }
          })
        }
      }
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