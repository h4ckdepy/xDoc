Component({
    data: {
        style: '',
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: 'bg-blue'
        },
        icon: {
            type: String,
            value: ''
        },
        //消息内容
        msg: {
            type: String,
            value: ''
        },
        //是否显示
        show: {
            type: Boolean,
            value: false
        },
        //顶部类型，0，1，2，3
        topType: {
            type: Number,
            optionalTypes: String,
            value: 2
        },
        //对齐方向
        align: {
            type: String,
            value: 'center'
        },
        //展示时长(ms)，值为 0 时，notify 不会消失
        duration: {
            type: Number,
            optionalTypes: String,
            value: 3000
        },
        //遮罩，禁止点击下层元素
        mask: {
            type: Boolean,
            value: false
        },
        //遮罩背景
        maskBg: {
            type: String,
            value: ''
        },
    },
    lifetimes: {
        ready() {
            this.setStyleValue();
        }
    },
    observers: {
        'position'() {
            this.setStyleValue();
        },
        'topType'() {
            this.setStyleValue();
        },
        'align'() {
            this.setStyleValue();
        },
        'duration'() {
            this.setTimeData();
        },
    },
    methods: {
        //处理样式
        setStyleValue() {
            let {topType, align, sys_statusBar, sys_navBar} = this.data;
            let style = '';
            //处理位置
            if (parseInt(topType) === 1) {
                style += 'top:' + sys_statusBar + 'px;';
            } else if (parseInt(topType) === 2) {
                style += 'padding-top:' + (sys_statusBar + 13) + 'px;';
            } else if (parseInt(topType) === 3) {
                style += 'top:' + sys_navBar + 'px;';
            }
            //对齐方向
            if (align === 'left') {
                style += 'justify-content: start;';
            } else if (align === 'center') {
                style += 'justify-content: center;';
            } else if (align === 'right') {
                style += 'justify-content: flex-end;';
            }
            //更新数据
            this.setData({style: style})
            this.setTimeData();
        },
        //处理时间数据
        setTimeData() {
            let duration = this.data.duration;
            let _this = this, time = parseInt(duration);
            if (duration !== '' && duration > 0) {
                setTimeout(() => {
                    _this.setData({show: false})
                    _this.triggerEvent('close',false);
                }, time);
            }
        },
        //消息被点击
        onMsgTap() {
            this.triggerEvent('msgTap');
        },
        //遮罩被点击
        onMaskTap() {
            this.triggerEvent('maskTap');
        },
    },
})