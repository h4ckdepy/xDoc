Component({
    data: {
        cssVal: '', style: '',
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
            value: 'border-gray-c'
        },
        //文本颜色
        color: {
            type: String,
            value: 'text-gray-a'
        },
        //标题文本
        title: {
            type: String,
            value: ''
        },
        //对齐方向 left center right
        align: {
            type: String,
            value: 'center'
        },
        //虚线
        dashed: {
            type: Boolean,
            value: false
        },
        //粗线
        bold: {
            type: Boolean,
            value: false
        },
        //动画
        shine: {
            type: Boolean,
            value: false
        },
        //虚线宽度
        width: {
            type: String,
            value: '100%'
        },
    },
    lifetimes: {
        ready() {
            this.setClassVal();
        }
    },
    observers: {
        'position'() {
            this.setClassVal();
        },
    },
    methods: {
        //处理样式
        setClassVal() {
            let {dashed, bold, shine, width} = this.data;
            let cssVal,borderVal,shineVal;
            //是否虚线
            if (dashed && bold) {
                borderVal = 'dasheds-bottom ';
            } else if (dashed && !bold) {
                borderVal = 'dashed-bottom ';
            } else if (!dashed && bold) {
                borderVal = 'borders-bottom ';
            } else {
                borderVal = 'border-bottom ';
            }
            //是否虚线动画
            if (dashed && shine && !bold) {
                shineVal = 'dashed-shine ';
            } else if (dashed && shine && bold) {
                shineVal = 'dasheds-shine ';
            } else {
                shineVal = ' ';
            }
            //虚线宽度
            let style = `width: ${width};`;
            cssVal = borderVal + shineVal;
            //更新数据
            this.setData({
                cssVal: cssVal,
                style: style
            })
        },
    },
})