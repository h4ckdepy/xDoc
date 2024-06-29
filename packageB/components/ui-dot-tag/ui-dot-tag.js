Component({
    data: {
        position: '', animationVal: '', dotTagStyle: '', dotTagDotStyle: '',
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
        //标签样式
        tagUi: {
            type: String,
            value: ''
        },
        //名称
        name: {
            type: String,
            value: ''
        },
        //点在上面
        top: {
            type: Boolean,
            value: false
        },
        //点在左边
        left: {
            type: Boolean,
            value: false
        },
        //点在右边
        right: {
            type: Boolean,
            value: false
        },
        //点在下面
        bottom: {
            type: Boolean,
            value: false
        },
        //点动画效果
        animation: {
            type: Boolean,
            value: false
        },
        //x轴坐标
        x: {
            type: Number,
            optionalTypes: String,
            value: ''
        },
        //y轴坐标
        y: {
            type: Number,
            optionalTypes: String,
            value: ''
        },
        //点偏移
        dot: {
            type: Number,
            optionalTypes: String,
            value: ''
        },
    },
    lifetimes: {
        ready() {
            this.setPosition();
        },
    },
    observers: {
        'top'() {
            this.setPosition();
        },
        'left'() {
            this.setPosition();
        },
        'right'() {
            this.setPosition();
        },
        'bottom'() {
            this.setPosition();
        },
        'animation'() {
            this.setPosition();
        },
        'x'() {
            this.setPosition();
        },
        'y'() {
            this.setPosition();
        },
        'dot'() {
            this.setPosition();
        },
    },
    methods: {
        setPosition() {
            let { top, left, right, bottom, animation, x, y, dot } = this.data;
            let val = 'ui-dot-tag-right', vars = '', tagStyle = '', dotStyle = '', dotNum = 8;
            if (top) {
                val = 'ui-dot-tag-top';
                dotNum = -23;
            }
            if (left) {
                val = 'ui-dot-tag-left';
                dotNum = 8;
            }
            if (right) {
                val = 'ui-dot-tag-right';
                dotNum = 8;
            }
            if (bottom) {
                val = 'ui-dot-tag-bottom';
                dotNum = -23;
            }
            if (animation) {
                vars = 'ui-dot-tag-animation';
            }
            if (x !== '' || y !== '') {
                tagStyle += 'position: absolute;';
            }
            if (x !== '') {
                tagStyle += 'left: ' + x + 'px;';
            }
            if (y !== '') {
                tagStyle += 'top: ' + y + 'px;';
            }
            if (dot !== '') {
                dot = parseInt(dot);
                if (left || right) {
                    dotStyle += 'top: ' + (dotNum + dot) + 'rpx;';
                }
                if (top || bottom) {
                    dotStyle += 'margin-left: ' + (dotNum + dot) + 'rpx;';
                }
            }
            //更新数据
            this.setData({
                position: val,
                animationVal: vars,
                dotTagStyle: tagStyle,
                dotTagDotStyle: dotStyle
            })
        },
        tapDotTag() {
            this.triggerEvent('tagTap',this.data.name);
        }
    },
})