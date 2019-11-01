let swiperBox = document.querySelector('#swiperBox');
// console.log(swiperBox)  
let newsli = document.querySelector('.news .newsLists')

function swiperInit() {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        loop: true,
        autoplay: true
    });
}
// swiperInit();
function renderS(data) {
    let str = ''
    data.forEach(item => {
        str += `<div class="swiper-slide ">
        <img src="${item.img}" alt="">
        <p>${item.title}</p>
    </div>`;
    })
    // console.log(str)
    swiperBox.innerHTML = str;
}

function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|203/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            console.log(data);
            cb && cb(data)
        }
    }
    xhr.send()
}
getData('./data/banner.json', function (data) {
    renderS(data);
    swiperInit();
});

function renderL(data) {
    let html = '';
    data.forEach((item) => {
        if (item.type == 0) {
            html += `  <li>
            <div class="textBox">
                <p class="arti">印尼总统高难度盘腿坐姿走红 网友纷纷发起挑战</p>
                <div class="count">
                    <i class="icon_com"></i>
                    <i>${item.commentNum}</i>
                </div>
            </div>   
        </li>`
        } else {
            html += `  <li>
            <div class="textBox">
                <p class="arti">印尼总统高难度盘腿坐姿走红 网友纷纷发起挑战</p>
                <div class="count">
                    <i class="icon_com"></i>
                    <i>${item.commentNum}</i>
                </div>
            </div>
            <div class="imgBox"><img src="${item.img[0]}" alt=""></div>
        </li>`
        }
    })
    newsli.innerHTML = html;
}
getData('./data/list.json', function (data) {
    swiperInit();
    renderL(data);
});