const app = getApp();
let interstitialAd = null
Page({
    data: {
        swiperList: [
            { img: "/static/img/45fc.png" },
            { img: "/static/img/d0f2.png" }
        ],
        list: [],
        isLoading: false,
        hasMore: true
    },
    onLoad() {
      let that = this;
      wx.request({
        url: app.globalData.api+"/getArticleList?p=1&"+app.globalData.at, // 
        method: 'GET',
        success(res) {
          that.setData({  
            list:res.data.data,
            page: 1
          });
        },
        fail(err) {
            wx.showToast({
              title: '网络错误,请重新进入',
              icon: 'none',//icon
              duration: 2500 //停留时间
          })
        }
      });
    },
    onShow() {

    },
    toArticleDetail(event) {
      const id = event.currentTarget.dataset.id;
      const pass = event.currentTarget.dataset.pass;
      const title = event.currentTarget.dataset.title;
      const jumpurl = event.currentTarget.dataset.jumpurl;
      const url = `/pages/view/view?id=${id}&pass=${pass}&title=${title}&jumpurl=${jumpurl}`;
        wx.navigateTo({
          url:url
        });
    },
    onReachBottom(){
      if (this.data.isLoading || !this.data.hasMore) return;
      this.setData({ isLoading: true }); // 显示加载指示器
      setTimeout(() => {
        this.loadMoreData();
      }, 1000); 
    },
    loadMoreData() {
      let that = this;
      let nextPage = this.data.page + 1;
      this.setData({
        isLoading: true
      });
  
      wx.request({
        url: app.globalData.api + "/getArticleList?p=" + nextPage + "&" + app.globalData.at,
        method: 'GET',
        success(res) {
          if (res.data.data && res.data.data.length > 0) {
            that.setData({
              list: that.data.list.concat(res.data.data),
              page: nextPage,
              isLoading: false
            });
          } else {
            that.setData({
              hasMore: false,
              isLoading: false
            });
          }
        },
        fail(err) {
            wx.showToast({
              title: '网络错误,请重新下拉尝试',
              icon: 'none',//icon
              duration: 2500 //停留时间
          })
          that.setData({
            isLoading: false
          });
        }
      });
    },
  

})
