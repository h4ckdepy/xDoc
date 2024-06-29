Page({
    data: {
        list: [],
        listItem: []
    },
    onLoad() {
        let listItem = [
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
        this.setData({
            list: listItem,
            listItem: listItem
        })
    },
    //滚动到底部的事件
    handleScrollbottom() {
        const myTimer = setTimeout(() => {
            let list = this.data.list
            list.push(...this.data.listItem)
            this.setData({
                list: list
            })
            clearTimeout(myTimer);
        }, 500)
    }
})