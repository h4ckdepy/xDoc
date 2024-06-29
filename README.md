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

数据渲染格式请参考 https://api.rce.ink/ 的文档，目前仅使用文章加密审批、文章列表、文章详情、租户信息四个接口。

若您是DepyDocs的租户,请修改成您自己的服务器地址后,在服务端追加自己的accessToken,逻辑自行实现。后续只需要反向代理到DepyDocs API即可，其余代码无需变动。（请勿在app.js中的at填写,此处为开发环境使用）

## 本项目使用到的框架

1、colorui
2、towxml