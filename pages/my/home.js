const app = getApp();

Page(
    {
      onLoad: function() {
        let that = this;
          wx.request({
            url: app.globalData.api+"/getTenantInfo?"+app.globalData.at, // 
            method: 'GET',
            success(res) {
              that.setData({ 
                tenant_avatar: res.data.data.tenant_avatar,
                tenant_blogname: res.data.data.tenant_blogname,
                tenant_github: res.data.data.tenant_github,
                tenant_weibo: res.data.data.tenant_weibo,
                richTextNodes: res.data.data.tenant_htmlintro
              });
            },
            fail(err) {
              console.error('请求失败：', err);
            }
          });
      },
      
      data: {
        tenant_avatar: '' ,
        tenant_blogname: '',
        tenant_github: '',
        tenant_weibo: ''
      },
})
