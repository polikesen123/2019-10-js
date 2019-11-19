//请求数据
let flag = false;//代表新数据渲染完成 什么时候flag是true；新数据一请求
let olis = document.querySelectorAll('.body li');
let {winH,offset} = utils;
function init() {
    olis.forEach(item=>item.innerHTML ='')
}
init()
function getData() {
    flag = true;
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            //  console.log(xhr.response);
            let data = JSON.parse(xhr.response)
            // console.log(data);
            render(data);
            loadAll()
            flag = false;//新数据渲染完成之后的操作
        }
    }
    xhr.send();
}
getData();

//渲染数据
function render(data) {
    let str = '';
    data.forEach((item, index) => {
        let {
            pic,
            height,
            desc,
            author
        } = item;
    //     str = `
    // <img src="./img/1.jpg" realSrc ="${pic}" alt="" style="height: ${height}px">
    // <p class="desc">${desc}</p>
    // <p class="author">${author}</p>`;
    //     // olis[index % 5].innerHTML += str;
    // let temp = getMinLi();
    // temp.innerHTML +=str;//一闪闪一屏
    str = `
    <img src="./img/1.jpg" realSrc ="${pic}" alt="" style="height: ${height}px">
    <p class="desc">${desc}</p>
    <p class="author">${author}</p>
`;
        // olis[index % 5].innerHTML += str;
    let temp = getMinLi();
    let div = document.createElement('div');
    div.className = 'img_box';
    div.innerHTML = str;
    temp.appendChild(div);
    });
}
function  getMinLi() {
    var ary = [...olis].sort((a,b)=>{
        return a.clientHeight - b.clientHeight;
    })
    return ary[0];
}
//滚动加载更多
window.onscroll = function () {
    loadMore();
    loadAll()
}
function loadMore() {
    //最短的Li的底部露出来的时候加载新数据
    let li = getMinLi();
    if(offset(li).t+li.clientHeight<=winH().h+document.documentElement.scrollTop){
        //需要等新数据渲染到页面之后 再去加载新数据
        if(!flag){
           getData();
           console.log(666);
        }
    }
}
function loadImg(ele) {
    if(ele.loaded) return;
    //图片懒加载 预加载
    if(offset(ele).t+ele.clientHeight/2<=document.documentElement.scrollTop+winH().h){
        //图片露出一半
        let realSrc = ele.getAttribute('realSrc');
        let temp = new Image();
        temp.src = realSrc;
        temp.onload = function () {
            ele.src = realSrc;
            fadeIn(ele)
            ele.loaded=true;//加载过了就不要再加载了
        }
        temp = null;
    }
}
function loadAll() {
  let imgs = document.querySelectorAll('.body img');
  imgs.forEach(item=>loadImg(item))
}
function fadeIn(ele) {
    ele.style.opacity = 0;
    let n = 0;
    ele.timer = setInterval(()=>{
        n+=0.05;
        if(n>=1){
            n=1;
            clearInterval(ele.timer);
        }
        ele.style.opacity = n;
    },20)
}