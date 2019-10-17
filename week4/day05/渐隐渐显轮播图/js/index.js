let $ul = $('ul'),
    $tipBox = $('.box .tip_box'),
    $lis = $('.box .img_box li'),
    $tips = $('.box .tip_box .tip'),
    $leftBtn = $('.box .left_btn'),
    $rightBtn = $('.box .right_btn'),
    $box = $('.box');
// console.log($ul)
let n = 0,
    timer = null;

function getData() {
    $.ajax({
        url: './data.json',
        success: function (data) {
            render(data);
            init()
        }
    })
}
getData()

function render(data) {
    let str = '';
    let tipStr = '';
    data.reverse().forEach((item, index) => {
        str += ` <li>
        <img src="${item.img}" alt="">
        <p>${item.desc}</p>
    </li>`;
        tipStr += (index == 0 ? ` <span class="tip current"></span> ` : ` <span class="tip"></span> `)
    });
    $ul.html(str);
    $tipBox.html(tipStr);
}

function init() {
    $lis = $('.box .img_box li'); //更新$lis
    $tips = $('.box .tip_box .tip');
    $lis.eq(0).siblings().hide();
    autoMove();
}

function autoMove() {
    time = setInterval(() => {
        move();
    }, 2000)
}

function move() {
    n++;
    if (n >= $lis.length) {
        n = 0;
    }
    // $lis.eq(n).show().siblings().hide();
    $lis.eq(n).css({
        opacity: 0
    }).animate({
        opacity: 1
    }, 300).show().siblings().animate({
        opacity: 0
    }, 300, function () {
        $lis.eq(n).siblings().hide();
    });
    autoFocus();
}

function autoFocus() {
    $tips.eq(n).addClass('current').siblings().removeClass('current')
}
$box.on('mouseenter', function () {
    clearInterval(timer)
})
$box.on('mouseleave', function () {
    autoMove();
})
//_是underscore的简写
$rightBtn.on('click', _.throttle(function () {
    move();
}, 500))
$leftBtn.on('click', _.throttle(function () {
    n--;
    if (n < 0) {
        n = $lis.length - 1;
    }
    n--;
    move();
}, 500))

// function tipClick() {
//     for (let i = 0; i < tips.length; i++) {
//         $tips[i].on('click', function () {
//             autoFocus();
//             n = i;
//             $tips[i].eq(n).addClass('current').siblings().removeClass('current')
//         })
//     }
// }