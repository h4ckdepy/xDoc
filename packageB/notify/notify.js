Page({
    data: {
        isShow: false, bgVal: 'bg-blue', iconVal: '', msgVal: 'ColorUI真棒！！',
        topType: 2, alignVal: 'center', isMask: false, maskBgVal: '', duration: 0,
    },
    //基础效果
    onShowChange() {
        let isShow = this.data.isShow;
        this.setData({isShow: !isShow});
    },
    //加icon
    onIconChange() {
        let iconVal = this.data.iconVal;
        if (!iconVal) {
            this.setData({iconVal: '_icon-info-o'});
        } else {
            this.setData({iconVal: ''});
        }
    },
    //背景颜色
    onBgChange(e) {
        this.setData({bgVal: e.detail})
    },
    //顶部类型
    onTopTypeChange(e) {
        this.setData({topType: e.detail})
    },
    //对齐方向
    onAlignValChange(e) {
        this.setData({alignVal: e.detail})
    },
    //显示遮罩
    onMaskChange() {
        let isMask = this.data.isMask;
        this.setData({isMask: !isMask});
    },
    //遮罩颜色
    onMaskBgChange(e) {
        this.setData({maskBgVal: e.detail})
    },
    //关闭时间
    onDurationChange(e) {
        this.setData({duration: e.detail})
    },
    //消息关闭事件
    notifyClose(e) {
        this.setData({isShow: e.detail})
        this.$tips('消息关闭事件')
    },
    //消息点击事件
    notifyMsgTap() {
        this.$tips('消息点击事件')
    },
    //遮罩点击事件
    notifyMaskTap() {
        this.setData({isMask: false})
        this.$tips('遮罩点击事件')
    },
})