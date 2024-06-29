Component({
    data: {
        num: 1,
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        //数量值
        val: {
            type: Number,
            optionalTypes: String,
            value: 1
        },
        //最小值
        minVal: {
            type: Number,
            optionalTypes: String,
            value: 1
        },
        //最大值
        maxVal: {
            type: Number,
            optionalTypes: String,
            value: 100
        },
        //小数点
        digit: {
            type: Boolean,
            value: false
        },
        //小数点位数,1-2
        digits: {
            type: Number,
            optionalTypes: String,
            value: 1
        },
        //主题, default,no-bg,grey,blue
        theme: {
            type: String,
            value: 'default'
        },
        //类型，1-4
        tpl: {
            type: Number,
            optionalTypes: String,
            value: 1
        },
        //输入框禁止输入
        noVal: {
            type: Boolean,
            value: false
        },
        //禁止减少
        noCut: {
            type: Boolean,
            value: false
        },
        //禁止增加
        noAdd: {
            type: Boolean,
            value: false
        },
        //附加数据
        item: null,
        //背景样式
        uiBox: String,
        bg: String,
        bgCut: String,
        bgAdd: String,
        bgVal: String,
        //其它样式
        ui: String,
        uiCut: String,
        uiAdd: String,
        uiVal: String,
    },
    lifetimes: {
        ready() {
            let { val } = this.data;
            this.setData({num: val})
            this.setDisabled()
        }
    },
    observers: {
        'val'(num) {
            this.setData({num: num})
            this.setDisabled()
        }
    },
    methods: {
        //减少数量
        tapReduce() {
            let { num, minVal, item, noCut, digit, digits } = this.data;
            if (!noCut) {
                digits = parseInt(digits);
                if (!digit) {
                    num--;
                }
                if (digit && digits === 1) {
                    num = this.toVal((num - 0.1),digits);
                }
                if (digit && digits === 2) {
                    num = this.toVal((num - 0.01),digits);
                }
                if (minVal > num) {
                    num = minVal
                }
                this.setData({num: num})
                this.setDisabled();
                //返回事件
                this.triggerEvent('onCut',{
                    item: item, val: num
                });
                this.triggerEvent('onVal',{
                    item: item, val: num
                });
            }
        },
        //增加数量
        tapAddition() {
            let { num, maxVal, item, noAdd, digit, digits } = this.data;
            if (!noAdd) {
                digits = parseInt(digits);
                if (!digit) {
                    num++;
                }
                if (digit && digits === 1) {
                    num = this.toVal((parseFloat(num) + 0.1),digits);
                }
                if (digit && digits === 2) {
                    num = this.toVal((parseFloat(num) + 0.01),digits);
                }
                if (maxVal < num) {
                    num = maxVal
                }
                this.setData({num: num})
                this.setDisabled();
                //返回事件
                this.triggerEvent('onAdd',{
                    item: item, val: num
                });
                this.triggerEvent('onVal',{
                    item: item, val: num
                });
            }
        },
        //输入框内容
        inputNum(e) {
            let { num, minVal, maxVal, item } = this.data;
            num = e.detail.value;
            if (maxVal < num) {
                num = maxVal
            }
            if (minVal > num) {
                num = minVal
            }
            this.setData({num: num})
            this.setDisabled();
            //返回事件
            this.triggerEvent('onInput',{
                item: item, val: num
            });
            this.triggerEvent('onVal',{
                item: item, val: num
            });
        },
        //设置加减是否可点击
        setDisabled() {
            let { num, minVal, maxVal, noCut, noAdd } = this.data;
            noCut = num <= minVal; noAdd = maxVal <= num;
            this.setData({noCut: noCut, noAdd: noAdd})
        },
        //处理小数点精度问题
        toVal(val,digits) {
            return parseFloat(val)
                .toFixed(digits)
                .toString()
                .split('')
                .reverse()
                .join('')
                .replace(/(\d{3})/g, '$1,')
                .replace(/\,$/, '')
                .split('')
                .reverse()
                .join('')
        }
    },
})