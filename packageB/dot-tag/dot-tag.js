Page({
    data: {
        imgA: '', imgB: '', imgC: '', imgD: '', x: 60, y: 40,
    },
    onLoad() {
        let list = [];
        for(let i = 1; i< 15; i++) {
            let url = i  < 10 ? '0' + (i) : i;
            list.push('https://oss.colorui.org/cos/wallpaper/10' + url + '.jpg');
        }
        let imgA = this.getImage(list);
        let imgB = this.getImage(list);
        let imgC = this.getImage(list);
        let imgD = this.getImage(list);
        this.setData({
            imgA: imgA,
            imgB: imgB,
            imgC: imgC,
            imgD: imgD
        })
    },
    getImage(list) {
        return list[Math.floor(Math.random() * list.length)];
    },
    tapDotTag(e) {
        console.log(11)
        this.$tips('点击了：'+e.detail)
    },
    movableChange(e) {
        this.setData({
            x: e.detail.x,
            y: e.detail.y
        })
    },
})