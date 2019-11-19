let ul = document.querySelector('.box .img_box ul')
// console.log(ul)
let box = document.querySelector('.box');
let tipBox = document.querySelector('.tip_box');
let tips = document.getElementById('box').getElementsByClassName('tip');
let leftBtn = document.querySelector('.box .left_btn');
let rightBtn = document.querySelector('.box .right_btn');
console.log(tips, leftBtn, rightBtn);
//获取数据
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            render(data);
            move(); //数据渲染完成之后再去开启动画
            tipClick();
            // console.log(data)
        }
    }
    xhr.send();
}
getData();
//渲染数据
function render(data) {
    data = data || [];
    let html = '';
    let tipStr = '';
    data.push(data[0]); //在数组末尾添加第一项，是为了在数组末尾添加一张图
    data.forEach((item, index) => {
        let {
            img,
            desc
        } = item;
        html += `<li>
        <img src="${img}" alt="">
        <p class="desc">${desc}</p>
    </li>`;
        if (index !== data.length - 1) {
            if (index == 0) {
                //只有第一项 才有默认有 current
                tipStr += ` <span class="tip current"></span>\n`;
            } else {
                tipStr += ` <span class="tip"></span>\n`;
            }
        }
    });
    tipBox.innerHTML = tipStr;
    ul.innerHTML = html;
    ul.style.width = data.length * 800 + 'px'; //更新盒子宽度
}
let n = 0;
let timer;

function move() {
    timer = setInterval(() => {
        change();
    }, 1500);
}

function change() {
    n++; //n = 6的时候显示 伪 第一张
    if (n == (tips.length + 1)) {
        ul.style.left = 0; //让图片直接闪到第一张 紧接着向第二张图移动
        n = 1;
    }
    animate(ul, {
        left: -800 * n
    }, 500);
    tipClass(n);
}
//划入盒子时 清除动画
box.onmouseenter = function () {
    clearInterval(timer)
}
//划出盒子时 重启动画
box.onmouseleave = function () {
    move();
}

function tipClass(m) {
    m = m >= tips.length ? 0 : m; //当m指向了伪第一张的时候 让第一张高亮
    for (let i = 0; i < tips.length; i++) {
        tips[i].className = 'tip';
    }
    tips[m].className = 'tip current';
}
//点击左右按钮控制图片移动

rightBtn.onclick = function () {
    change();
}
leftBtn.onclick = function () {
    n--;
    //n==-1 闪到最后
    if (n < 0) {
        ul.style.left = -800 * tips.length + 'px';
        n = tips.length - 1;
    }
    tipClass(n);
    animate(ul, {
        left: -800 * n
    }, 500);
}

function tipClick() {
    for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function () {
            n = i;
            tipClass(n);
            animate(ul, {
                left: -800 * n
            }, 500);
        }
    }
}