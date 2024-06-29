let item_height = 80
let visiable = true
let listItem = []
let windowShowMax = 0 //屏幕最多可以方多少个

Page({
    data: {
        list: [],
        afterHeight: 0,
        beforeheight: 0,
        windowsShowList: [], /// 屏幕展示的list
        windowsShowTop: 0,
    },
    onReady() {
        listItem = [
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            },
            {
                'image': '/static/img/big39000.jpg',
                'title': '虚拟列表滚动,虚拟列表滚动,虚拟列表滚动.',
                'passtime': '2021-02-02 10:00:51'
            }
        ]
        let list = [...listItem, ...listItem, ...listItem, ...listItem, ...listItem, ...listItem, ...listItem]
        const query = wx.createSelectorQuery();
        query.select('#scroll').fields({
            size: true
        }).exec((res) => {
            windowShowMax = Math.ceil(res[0].height / item_height),
                this.setData({
                    list: list,
                    windowsShowList: list.slice(0, Math.ceil(res[0].height / item_height)),
                    beforeheight: 0,
                    afterHeight: (item_height * (list.length - Math.ceil(res[0].height / item_height))),
                })
        })
    },
    onScorll(e) {
        // 下滑
        if (visiable) {
            visiable = false
            let myTimer = setTimeout(() => {
                visiable = true
                clearTimeout(myTimer)
            }, 50)
            let windowsShowTop = 0 //表示现在屏幕最上面是第多少个
            if (Math.ceil(e.detail.scrollTop / item_height) - 1 > 0) {
                windowsShowTop = Math.ceil(e.detail.scrollTop / item_height) - 1
            }

            let windowsShowBottom = windowsShowTop + windowShowMax * 2// 表示现在屏幕最下面是第多少个
            if (!this.data.list[windowsShowBottom]) {
                windowsShowBottom = this.data.list.length
            }
            //这里表示快到底了，请求新的数据加入list
            if (windowsShowBottom == this.data.list.length) {
                console.log("数据快到了！")
                let list = this.data.list
                list.push(...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem)
                let windowsShowList = list.slice((windowsShowTop - windowShowMax), windowsShowBottom)
                let top = windowsShowTop -windowShowMax
                this.setData({
                    beforeHeight: top * item_height,
                    afterHeight: (list.length - windowsShowBottom + 1) * item_height,
                    windowsShowList: windowsShowList,
                    list: list
                })

            } else {
                let windowsShowList = []
                if (windowsShowTop < windowShowMax) {
                    windowsShowList = this.data.list.slice(0, windowsShowBottom)
                } else {
                    windowsShowList = this.data.list.slice((windowsShowTop - windowShowMax), windowsShowBottom)
                }
                let top = 0
                if (windowsShowTop > windowShowMax) {
                    top = windowsShowTop - windowShowMax
                }

                this.setData({
                    beforeHeight: top * item_height,
                    afterHeight: (this.data.list.length - windowsShowBottom + 1) * item_height,
                    windowsShowList: windowsShowList
                })
            }
        }
    },
})