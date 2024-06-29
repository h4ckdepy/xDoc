import { colorUI } from './config/ColorUI'
import { colorUISdk } from './config/mp-sdk'

App({
    globalData: { 
      api: 'https://docs.test.rce.ink/index/openapi', 
      at: 'accesstoken=',
      openid :'',
      loginApi:"https://API/index/api",
      flag:"init",
      crypto_detail:""
    },
    colorUI,
    colorUISdk,
    towxml:require('/towxml/index'),
    onLaunch() {

    },
    onShow() {
      //微信登录获取openid

      if(this.globalData.openid != ''){
        console.log("Already Login.")
      }else{
        let that = this;
        wx.login({
          success: res => {
            wx.request({
              url: this.globalData.loginApi+"/xcxlogin?code="+res.code, // 
              method: 'GET',
              success(res) {
                that.globalData.openid = res.data.openid
                console.log("[+] Login Successful.")
              },
              fail(err) {
                wx.showToast({
                  title: '登录态授权异常,请重新进入',
                  icon: 'none',
                  duration: 2500 
              })
              }
            });
          }
        })
      }


      
    },
})
