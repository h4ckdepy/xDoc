Component({
    relations: {
        '../ui-col/ui-col': {
            type: 'child'
        }
    },
    data: {
        styleValue: '',
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
            value: ''
        },
        //栅格间隔
        spacing: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
        //类型，12、24
        col: {
            type: Number,
            optionalTypes: String,
            value: 24
        },
        //对齐方向
        align: {
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
        'spacing'() {
            this.setStyleValue();
        }
    },
    methods: {
        setStyleValue() {
            let spacing = parseInt(this.data.spacing), val= '';
            if (spacing !== 0) {
                const num = Math.floor(spacing / -2) + (spacing % 2) + 'rpx';
                val = `margin:${num};`;
            }
            //更新数据
            this.setData({styleValue: val})
        }
    },
})