// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wareList:[
      {
        leftNav:{
          title: '热搜推荐',
          id:0
        },
        rightTitle:'热门搜索',
        id: 11,
        rightList:[
          {
            listImg:'../../images/myfood.jpg',
            listTitle:'热门搜索'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '热门搜索'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '热门搜索'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '热门搜索'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '热门搜索'
          }
        ]
      },
      {
        leftNav: {
          title: '男装内衣',
          id: 1
        },
        rightTitle: '男装内衣',
        id: 22,
        rightList: [
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '男装内衣'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '男装内衣'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '男装内衣'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '男装内衣'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '男装内衣'
          }
        ]
      },
      {
        leftNav: {
          title: '家用电器',
          id: 2
        },
        rightTitle: '家用电器',
        id: 33,
        rightList: [
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '家用电器'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '家用电器'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '家用电器'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '家用电器'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '家用电器'
          }
        ]
      },
      {
        leftNav: {
          title: '鞋靴包箱',
          id: 3
        },
        rightTitle: '鞋靴包箱',
        id: 44,
        rightList: [
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '鞋靴包箱'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '鞋靴包箱'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '鞋靴包箱'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '鞋靴包箱'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '鞋靴包箱'
          }
        ]
      },
      {
        leftNav: {
          title: '运动户外',
          id: 4
        },
        rightTitle: '运动户外',
        id: 55,
        rightList: [
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '肉干肉脯'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '肉干肉脯'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '肉干肉脯'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '肉干肉脯'
          },
          {
            listImg: '../../images/myfood.jpg',
            listTitle: '肉干肉脯'
          }
        ]
      }
    ],
    clickIndex:0
  },
  clickLeft(e){
    var clickIndex = e.currentTarget.dataset.index;
    this.setData({
      clickIndex
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var useWidth,
        useHeight;
    wx.getSystemInfo({
      success: function (res) {
        let windowWidth = (res.windowWidth * (750 / res.windowWidth)); //将宽度乘以换算后的该设备的rpx与px的比例
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        useWidth = (windowWidth - 200) + 'rpx';
        useHeight = (windowHeight - 103) + 'rpx';
      }
    });
    this.setData({
      useWidth,
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