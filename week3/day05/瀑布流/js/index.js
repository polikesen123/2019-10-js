let {
    winH,
    offset
} = utils;
let flag = false; //数据请求完成，true代表正在请求
//先去获取数据
function getData() {
    flag = true;
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            //数据请求成功
            flag = false;
            let data = JSON.parse(xhr.response);
            render(data);
            loadAll(); //保证首屏图片先加载出来
        }
    }
    xhr.send();
}
getData();
function init() {
    [...olis].forEach(item => {
        item.innerHTML = '';
    })
}
let body = document.getElementsByClassName('body')[0];
let olis = body.getElementsByTagName('li');
function render(data) {
    //data 是后台给的数组
    //循环数组 拼接字符串 把拼接好的放到页面
    let html = '';
    init();
    data.forEach(item => {
        let {
            pic,
            author,
            desc,
            height
        } = item;
        html = `
        <img src="./img/oreal.jpg" realSrc="${pic}" style="height:${height}px">
        <p class="desc">${desc}</p>
        <p class="author">${author}</p>`;
        //html是新拼接出来的一个块 我们需要决定的是这个快放到哪个里里面
        let temp = getMinLi();
        // temp.innerHTML += html;
        let div = document.createElement('div');
        div.className = 'img_box'
        div.innerHTML = html;
        temp.appendChild(div);
    });
}
//获取最低的那个li
function getMinLi() {
    var ary = [...olis].sort((a, b) => {
        return a.clientHeight - b.clientHeight;
    })
    // console.log(ary);
    return ary[0];
}
//滚动加载新数据
function loadMore() {
    //1.什么时候加载新数据 当最短的那个li的底部露出来的时候 开始加载新数据
    //2.怎么加载新数据
    if (flag) return; //flag 为true代表数据正在加载，这时不应该再去加载数据
    let scrT = document.body.scrollTop || document.documentElement.scrollTop; //卷去的高度
    let wH = winH().h; //一屏幕的高度
    let temp = getMinLi();
    let tarT = offset(temp).t + temp.clientHeight; //元素到body的距离+元素本身的高度 就是元素底边到body的距离
    // console.log(tarT,wH,scrT)
    if (tarT < scrT+wH) { //底部露出来之后加载数据
        getData();
        // console.log(111);
    }
}
window.onscroll = function () {
    this.loadMore();
    this.loadAll()
}
function loadAll() {
    //获取所有的img,然后挨个执行loadImg
    let imgs = document.querySelectorAll('.body img');
    [...imgs].forEach(item =>loadImg(item))
}
function loadImg(ele) {
    if (ele.loaded) return;
    let scrt =document.body.scrollTop || document.documentElement.scrollTop ;
    let wH = winH().h;
    let tarT = offset(ele).t;
    // let eleT = ele.clientHeight;
    if (tarT < scrt+wH) {
        ele.loaded=true;
        let temp = new Image();
        let realSrc = ele.getAttribute('realSrc');
        temp.src = realSrc;
        temp.onload = function () {
            ele.src = realSrc;
            fadeIn(ele);
            temp = null;
            // ele.loaded = true;
        }
    }
}
function fadeIn(ele){
    // 让图片的opacity从0变成1；
    ele.style.opacity = 0;
    let n = 0;
    ele.timer = setInterval(()=>{
        n+=0.01;
        if(n>=1){
            n = 1;
            clearInterval(ele.timer);
        }
        ele.style.opacity = n;

    },20)
}