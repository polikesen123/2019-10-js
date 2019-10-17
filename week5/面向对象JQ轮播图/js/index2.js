let banner = (function () {
    var idSelector = '';
    var $box = null,
        $imgBox = null,
        $lis = null,
        $left = null,
        $right = null,
        $tipBtn = null,
        $tips = null;
    var n = 0,
        timer = null;

    function initEle() {
        $box = $(idSelector) //把原生对象转JQ对象
        $imgBox = $box.find('.imgBox');
        $lis = $imgBox.children('li');
        $left  = $box.find('.left');
        $right  = $box.find('.right');
        $tipBtn = $box.find('.tipBtn');
        $tips = $tipBtn.children('li');
        console.log($left,$right)

        $lis.eq(0).show().siblings().hide();
    }

    function getData() {
        $.ajax({
            type: 'get',
            url: './data.json',
            success: function (data) {
                render(data);
                initEle();
                autoMove();
                eventBind()
            },
            error: function (err) {
                console.log('数据获取失败', err)
            }
        })
    }

    function render(data) {
        let str = '',
            tipStr = '';
        data.forEach((item, index) => {
            str += `<li><img src="${item.img}" alt=""></li>`;
            tipStr += (index == 0 ? ` <li class="current"></li> ` : ` <li></li> `)
        });
        // console.log(str,tipStr)
        $imgBox.html(str);
        $tipBtn.html(tipStr);
    }

    function move() {
        n++;
        if (n > $lis.length - 1) {
            n = 0;
        }
        $lis.eq(n).show().css({
            opacity: 0
        }).animate({
            opacity: 1
        }, 300).siblings().animate({
            opacity: 0
        }, 300, function () {
            $lis.eq(n).siblings().hide();
        });
        autoFocus();
    }

    function autoMove() {
        timer = setInterval(() => {
            move();
        }, 3000);
    }

    function autoFocus() {
        $tips.eq(n).addClass('current').siblings().removeClass('current');
    }

    function eventBind() {
        $right.on('click',function(){
            move();
        });
        $left.on('click',function(){
            n--;
            if(n<0){
                n = $lis.length-1;
            }

            n--;//抵消move()里面的++
            move();
        });
        $tips.on('click',function(){
            let m = $(this).index();
            n = m;
            n--;
            move();
        })
    }
    return {
        init: function () {
            idSelector = '#' + this.attr('id');
            getData();
            initEle();
        }
    }
})();
// banner.init()
// console.log(banner.init())
$.fn.extend({
    bannerInit: banner.init
});
$('#swiperBox').bannerInit();