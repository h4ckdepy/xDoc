const app = getApp();
let interstitialAd = null
Page({
    data: {

    },
    onLoad() {
        // 在页面onLoad回调事件中创建插屏广告实例
        if (wx.createInterstitialAd) {
            interstitialAd = wx.createInterstitialAd({
                adUnitId: 'adunit-ff57c3914b42bffc'
            })
            interstitialAd.onLoad(() => {})
            interstitialAd.onError((err) => {})
            interstitialAd.onClose(() => {})
        }
    },
    onShow() {
        // 在适合的场景显示插屏广告
        if (interstitialAd) {
            interstitialAd.show().catch((err) => {
                console.error(err)
            })
        }
    },
})
