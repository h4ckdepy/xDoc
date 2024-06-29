Page({
    data: {
        bgA: '', bgB: '', bgC: '', bgD: '', bgE: '', val: 1, vals: 1, valss: 1, sval: 1,
    },
    tapColorDot(e) {
        let val = e.currentTarget.dataset.val;
        let color = this.getColor();
        this.setData({[val]: color})
    },
    //随机生成库内颜色名
    getColor() {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown',''];
        return colorArr[Math.floor(Math.random() * colorArr.length)];
    },
    //减少
    onCutVal(e) {
        console.log(e.detail)
    },
    //增加
    onAddVal(e) {
        console.log(e.detail)
    },
    //内容改变
    onVal(e) {
        console.log(e.detail)
        this.setData({
            val: e.detail.val
        })
    },
    onsVal(e) {
        console.log(e.detail)
        this.setData({
            sval: e.detail.val
        })
    },
    onVals(e) {
        console.log(e.detail)
        this.setData({
            vals: e.detail.val
        })
    },
    onValss(e) {
        console.log(e.detail)
        this.setData({
            valss: e.detail.val
        })
    },
})