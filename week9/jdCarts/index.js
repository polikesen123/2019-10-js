let vm = new Vue({
    el: '#app',
    data: {
        name: "京东购物车",
        datalist: [],
        // delIndex:null,
        show:false
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            fetch('./data.json').then(res => {
                return res.json()
            }).then(data => {
                this.datalist = data;
            }).catch(err => {
                console.log(err)
            })
        },
        del(n){
            this.show=true;
            // this.delIndex = n;
        },
        clean(){
            this.datalist = [];
            this.checkAll = false;
        },
        edit(){

        },
        cancel(){
            this.show = false
        },
        sure(){
            this.show = false;
            this.datalist.splice(this.delIndex,1)
        }
    },
    filters: {
        setDots(num) {
            return "¥" + (num / 100).toFixed(2)
        }
    },
    computed: {
        checkAll: {
            get() {
                if(this.datalist.length==0) return 0;
                return this.datalist.every(item => item.isSelect)
            },
            set(val) {
                this.datalist.forEach(item => item.isSelect = val)
            }

        },
        total() {
            return this.datalist.filter(item => item.isSelect).reduce((prev,next ) => prev + next.count*next.price,0)
        },
    }
})