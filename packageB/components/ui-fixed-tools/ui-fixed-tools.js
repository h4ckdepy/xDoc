Component({
    data: {
        isTools: true,
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        data: {
            type: Array,
            value: []
        },
        scrollTop: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
        top: {
            type: Number,
            optionalTypes: String,
            value: 30
        },
        show: {
            type: Boolean,
            value: true
        },
        isIcon: {
            type: Object,
            value: {}
        },
        isSlotDown: {
            type: Boolean,
            value: false
        },
        isSlotTop: {
            type: Boolean,
            value: false
        },
        isSlotUp: {
            type: Boolean,
            value: false
        }
    },
    lifetimes: {
        ready() {
            let val = this.data.show;
            this.setData({
                isTools: val
            });
        },
    },
    observers: {
        'show'(val) {
            this.setData({
                isTools: val
            });
        }
    },
    methods: {
        //显示工具栏
        tapToolsShow() {
            this.setData({
                isTools: true
            });
            this.triggerEvent('tapShow',true);
        },
        //隐藏工具栏
        tapToolsHidden() {
            this.setData({
                isTools: false
            });
            this.triggerEvent('tapShow',false);
        },
        //工具栏被点击
        tapToolsBar(e) {
            let {item, index} = e.currentTarget.dataset;
            this.triggerEvent('tapBar', {item, index});
        },
        //滚动到顶部
        tapScrollTop() {
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            })
            this.triggerEvent('tapScrollTop');
        },
    },
})