const app = getApp();

Page({
    data: {
    },
    onLoad: function(options) {
      this.setData({
        id: options.id,
        pass:options.pass,
        title:options.title,
        jumpurl:options.jumpurl
      });
    },
    onUnload: function() {
      // 页面卸载时清除轮询
      clearInterval(this.pollingInterval);
      app.globalData.flag = "init"
      app.globalData.crypto_detail = ""
    },

    
    onShow: function() {
      const id = this.data.id;
      const pass = this.data.pass;
      const jumpurl =  this.data.jumpurl;

      if(jumpurl.length >0 && jumpurl!="null"){
        let that = this
        let result = app.towxml("#### 本文章为站外文章\n\n导向连接:"+jumpurl+"<div style='height: 2em;'></div>",'markdown');
        // 更新解析数据
        that.setData({
          article:result,
          isLoading: false
        });
      }else{

        if(pass == '' || pass == "null"){
          console.log("Article is not encryption..")
          let that = this
          wx.request({
            url: app.globalData.api+"/getArticleDetail?view_id="+id+"&"+app.globalData.at, // 
            method: 'GET',
            success(res) {
              let result = app.towxml(res.data.data.detail+"\n\n<div style='height: 2em;'></div>",'markdown');
              that.setData({
                article:result,
                isLoading: false
              });
            },
            fail(err) {
              wx.showToast({
                  title: '数据异常,请重新进入',
                  icon: 'none',
                  duration: 2500 
              })
            }
          });
        }else{
            //加密文章
            const token = app.globalData.openid
            //暂不设置理由输入框
            const msg = "小程序用户"
            let that = this
            this.pollingInterval = setInterval(function() {
              wx.request({
                url: app.globalData.api+"/getCryptoArticleDetail?token="+token+"&msg="+msg+"&view_id="+id+"&"+app.globalData.at, 
                method: 'GET',
                success(res) {
                  //初始化赋值
                  if(app.globalData.flag == "init"){
                    app.globalData.flag = res.data.code
                  }
                  //状态切换
                  if(app.globalData.flag != res.data.code){
                    //重载界面
                    wx.redirectTo({ 
                      url: "/pages/view/view?id="+that.data.id+"&pass="+that.data.pass+"&title="+that.data.title+"&jumpurl="+that.data.jumpurl
                    })
                  }else{
                    console.log(res.data.msg)
                    if(res.data.code == 200){
                      app.globalData.crypto_detail = res.data.data.detail
                      let result = app.towxml(app.globalData.crypto_detail+"\n\n<div style='height: 2em;'></div>",'markdown');
                      // 更新解析数据
                      that.setData({
                        article:result,
                        isLoading: false
                      });
                    }else{
                      app.globalData.crypto_detail = ""
                      let result = app.towxml(app.globalData.crypto_detail+"## 审批未通过或已被拒绝\n\n请联系租户进行审批状态修改<div style='height: 2em;'></div>",'markdown');
                      // 更新解析数据
                      that.setData({
                        article:result,
                        isLoading: false
                      });
                    }
                  }
                },
                fail(err) {
                    wx.showToast({
                      title: '数据异常,请重新进入',
                      icon: 'none',
                      duration: 2500 
                  })
                }
              });
            }, 5000); 
        }
      }
    }
})
