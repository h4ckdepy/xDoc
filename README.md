## 功能

数据基于DepyDocs-OpenAPI，基础实践。

目前已实现功能:

1、文章列表（底部下拉懒加载）

2、基础租户信息

3、Markdown格式转换

4、扫码登录（Server代码未给出）

5、加密文章审批阅读与状态更新

## 使用

app.js修改

```
api : 数据源API
loginapi : 处理登录逻辑的API
```

数据渲染格式请参考 https://api.rce.ink/ 的文档，目前仅使用文章加密审批、文章列表、文章详情、租户信息四个接口.

#### 租户使用

若您是DepyDocs的租户,请先使用个人域名进行流量转发,并追加自己的AccessToken.

例如:[https://a.com] 流量转发至 [https://docs.test.rce.ink/index/openapi?accesstoken=YourToken],然后将https://a.com添入app.js的api处即可.

AccessToken获取参考API文档,追加逻辑自行实现.

**（请勿在app.js中的at填写,此处为开发环境使用）**

## 小程序上架

1.wx.request需要配置小程序可信域,可信域又需要进行icp备案
2.原包我已精简小于2m,clone后使用微信开发者工具上传即可

## 本项目使用到的框架

1、colorui
2、towxml
