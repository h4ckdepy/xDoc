import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        share: true,
        shareTitle: 'DepyDocs',
        homePath: '/pages/home/home',
        tabBar: [{
            title: '文章',
            icon: '/static/tab_icon/document.png',
            curIcon: '/static/tab_icon/custom_cur.png',
            url: '/pages/home/home',
            type: 'tab'
        },
        {
            title: '我的',
            icon: '/static/tab_icon/my.png',
            curIcon: '/static/tab_icon/my_cur.png',
            url: '/pages/my/home',
            type: 'tab'
        }],
    }
})