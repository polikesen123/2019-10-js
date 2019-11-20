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
        count:0
    },
    created() {
        this.hash = location.hash || '#/all';
        window.addEventListener('hashchange', () => {
            this.hash = location.hash
        });
        this.ary = JSON.parse(localStorage.getItem('mytodolist')) || [];//从本地存储中获取数据
    },
    computed: {
        todoAry(){
            this.count = this.ary.filter(item => !item.done).length
            //只要this.ary发生改变就要存储在localStorage
            localStorage.setItem('mytodolist',JSON.stringify(this.ary))
            //依赖于 ary 和 hash
            switch(this.hash){
                case '#/all':
                    return this.ary;
                    break;
                case '#/finished':
                    return this.ary.filter(item => item.done)
                    break;
                case '#/unfinished':
                    return this.ary.filter(item => !item.done)
            }
        }
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
        del(obj) {
            this.ary=this.ary.filter(item=>item.id!==obj.id)
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
    },
    watch:{
        ary:{
            deep:true,
            handler(newV,oldV){
                console.log(666)
            }
        }
    }
})