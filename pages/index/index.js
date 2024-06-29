const app = getApp()
Page({
      data:{
            sceneCode:'',
            buttonClass: 'bg-blue',
            buttonText: '点击登录',
            buttonDisabled: false,
            loginapi:""
      },
      onLoad(query) {
        var that = this;
        const scene = decodeURIComponent(query.scene)
        if(scene == 'undefined'){
            that.setData({
                  sceneCode:'',
                  buttonText:"scene错误",
                  buttonDisabled:true
            })
        }else{
            that.setData({
                  loginapi:app.globalData.loginApi,
                  sceneCode:scene,
            })

        }

         
      },

      loginReq:function(){
            var that = this;
            that.setData({
                  loadingstatus:true
            })
            wx.login({
                  success (res) {
                      that.setData({
                        buttonClass: 'bg-green',
                        buttonText: '授权完毕',
                        buttonDisabled: true
                      });
                    let thatnew = that;
                    wx.request({
                      url: thatnew.data.loginapi+"/xcxscanlogin?code="+res.code+"&scene="+thatnew.data.sceneCode, // 
                      method: 'GET',
                      success(res) {
                        console.log(res.data)
                        if(res.data.code == 200){
                            wx.showToast({
                              title: '授权成功',
                              icon: 'success',
                              duration: 2500 
                          })
                        }else{
                          wx.showToast({
                            title: '授权失败,'+res.data.msg,
                            icon: 'error',
                            duration: 2500 
                        })
                        }
                      },
                      fail(err) {
                        console.error('req error:', err);
                      }
                    });
                  }
            })
      }
})