Vue.filter('money', function (val) {
    return "￥" + (val / 100).toFixed(2)
})
let vm = new Vue({
    el: "#app",
    data: {
        name: "珠峰",
        datalist: [],
        show: false,
        delIndex: null
    },
    computed: {
        /* checkAll(){
            //依赖下边每一项isSelect
            return this.datalist.every(item=>item.isSelect)
        }  */
        checkAll: {
            get() {
                return this.datalist.every(item => item.isSelect)
            },
            set(val) {
                console.log(val)
                this.datalist.every(item => item.isSelect = val)
            }
        },
        total() {
            return this.datalist.filter(item => item.isSelect).reduce((prev, next) => prev + next.count * next.price, 0)
        }
    },
    created() {
        // 实例创建完成之后会触发该函数；（钩子函数）
        this.getData();
    },
    methods: {
        getData() {
            fetch('./data.json').then((res) => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.datalist = data;
                // 重置checkAll属性
                this.checkAll = this.datalist.every(item => item.isSelect)
            }).catch((err) => {
                console.log(err)
            })
        },
        del(n) {
            this.delIndex = n;
            this.show = true
        },
        cancel() {
            this.show = false
        },
        sure() {
            this.datalist.splice(this.delIndex, 1);
            this.show = false
        },
        clear() {
            this.datalist = [];
            this.checkAll = false;
        }
    },

})