let vm = new Vue({
    el: '#app',
    data: {
        ary: [{
            id: 1,
            todo: '吃饭',
            done: true,
            editable: false
        }, {
            id: 2,
            todo: '睡觉',
            done: false,
            editable: false
        }, {
            id: 3,
            todo: '学习',
            done: false,
            editable: false
        }, {
            id: 4,
            todo: '写代码',
            done: false,
            editable: false
        }],
        todo: '',
        hash: '', //用来存储当前路径的哈希值
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange', () => {
            this.hash = location.hash
        })
    },
    computed: {
        doingNum() {
            let arr = this.ary.filter(item => !item.done)
            return arr.length;
        },
        doneAry(){
            let arr = this.ary.filter(item => item.done)
            return arr
        },
        doingAry(){
            let arr = this.ary.filter(item => !item.done)
            return arr
        },
    },
    methods: {
        submit() {
            this.todo = this.todo.trim();
            if (!this.todo.trim()) return;
            let obj = {
                id: Math.random(),
                done: false,
                todo: this.todo,
                editable: false
            };
            this.ary.unshift(obj);
            this.todo = '';
        },
        turn(obj) {
            obj.editable = !obj.editable;
        },
        del(n) {
            this.ary.splice(n, 1)
        }
    },
    directives: {
        focus(el, obj) {
            if (obj.value) {
                setTimeout(() => {
                    el.focus();
                }, 10)
            }
        }
    }
})