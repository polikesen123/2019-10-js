let $box = $('.box'),
    // $ul = $box.children('.img_box')
    $ul = $box.find('ul'),
    $tipBox = $box.find('.tip_box'),
    $leftBtn = $box.find('.left_btn'),
    $rightBtn = $box.find('.right_btn'),
    $tips = $tipBox.children('.tip');
let n = 0,
    timer = null;
//获取数据
function getData() {
    $.ajax({
        type: 'get',
        url: './data.json',
        success: function (data) {
            //请求成功会执行
            console.log(data)
            render(data);
            tipClick();//数据渲染完成之后再去绑定事件
        },
        error: function () {
            //请求失败时候执行
            console.log('失败')
        }
    })
}
getData();

function render(data) {
    let html = '';
    let tipStr = '';
    data.push(data[0]); //补图
    data.forEach((item, index) => {
        html += `<li>
        <img src="${item.img}" alt="">
        <p class="desc">${item.desc}</p>
    </li>`;
        if (index == 0) {
            tipStr += `<span class="tip current"></span>\n`
        } else if (index < data.length - 1) {
            tipStr += `<span class="tip"></span>\n`
        }
    });
    $ul.html(html);
    $tipBox.html(tipStr);
    $ul.width(800*data.length);
    $tips = $tipBox.children('.tip')//更新$tips jq获取的元素不存在映射
}

function move() {
    n++;
    if (n > $tips.length) {
        //闪到第一张
        $ul.css('left',0);//$ul.css({left:0})
        n = 1;
    }
    $ul.animate({
        left: -800 * n
    }, 300);
    autoFocus(n);
}

function autoMove() {
    timer = setInterval(() => {
        move();
    }, 2000)
}
autoMove();
function autoFocus(m) {
    if(m>=$tips.length){
        m=0;//m==$tips.length的时候显示的是伪第一张
    }
    //m就是要有点的那个索引
    $tips.eq(m).addClass('current').siblings().removeClass('current');
}
$box.on('mouseenter',function () {
    clearInterval(timer);
})
$box.on('mouseleave',function () {
    autoMove();
})
$leftBtn.on('click',function(){
    n--;
    if(n<0){
        $ul.css({left:-$tips.length*800});//闪到最后一张
        n = $tips.length-1;
    }
    $ul.animate({left:-n*800},200);
    autoFocus(n)
})
$rightBtn.on('click',function(){
    move();
})
function tipClick(){
    $tips.on('click',function(){
        let m = $(this).index();
        n = m;
        $ul.animate({left:-800*m},200);
        autoFocus(m);
    })
}

$.fn.extend({
    myFn:function(){
        console.log(666)
    },
    banner:function(){
        
    }
})
$.extend({
    //把对应的方法放到JQ自己身上（JQ当做了普通对象）
    myFn:function(){
        console.log(999);
    }
})





// try{
//     console.log(555);
//     console.log(qqq);
// }catch(e){
//     console.log(e)
// }