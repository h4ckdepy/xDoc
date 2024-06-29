Component({
    relations: {
        '../ui-row/ui-row': {
            type: 'parent'
        }
    },
    data: {
        styleValue: '', uiColVal: '',
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
        //栅格占据的列数,1-24
        span: {
            type: Number,
            optionalTypes: String,
            value: 24
        },
    },
    lifetimes: {
        ready() {
            let parent = this._nodesSetValue();
            if (parent) {
                let { spacing, col } = parent.data;
                this.setStyleValue(parseInt(spacing));
                this.setColVal(parseInt(col));
            }
        }
    },
    methods: {
        _nodesSetValue() {
            let radioNodes = this.getRelationNodes('../ui-row/ui-row');
            if (Array.isArray(radioNodes) && radioNodes.length > 0) {
                return radioNodes[0];
            } else {
                return false;
            }
        },
        setStyleValue(spacing) {
            let val = '';
            if (spacing !== 0) {
                const num = Math.floor(spacing / 2) + (spacing % 2) + 'rpx';
                val = `padding:${num};`;
            }
            //更新数据
            this.setData({styleValue: val})
        },
        setColVal(col) {
            let span = this.data.span, val = 'ui-col-' + span;
            if (col === 24) {
                val = 'ui-col-lg-' + span;
            }
            //更新数据
            this.setData({uiColVal: val})
        },
    }
})