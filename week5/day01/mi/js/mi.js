var banner = (function () {
    let idSelector = '';
    let $box = null,
        $ul = null,
        $lis = null,
        $tips = null,
        $tipBox = null,
        $leftBtn = null,
        $rightBtn = null;
    let n = 0,
        timer = null;

    function initEle() {
        $box = $(idSelector);
        $ul = $box.find('.img_box'),
            $lis = $box.find('.img_box li'),
            $tips = $box.find('.tip_box li'),
            $tipBox = $box.find('.tip_box'),
            $leftBtn = $box.find('.left_btn'),
            $rightBtn = $box.find('.right_btn');

        $lis.eq(0).show().siblings().hide();
    }

    function getData() {
        new Promise((res, rej) => {
            $.ajax({
                url: './data.json',
                success: res,
                error: (err) => {
                    console.log('数据获取失败', err)
                }
            })
        }).then((data) => {
            // console.log(data)
            render(data);
            initEle();
            autoMove();
            eventBind();
        }).catch(() => {
            console.log(666)
        }).finally(() => {
            console.log('我是promise的finally哦')
        })
    //     $.ajax({
    //         url: './data.json',
    //         success: (data) => {
    //             console.log(data)
    //         },
    //         error: () => {
    //             console.log()
    //         }
    //     })
    }

    function render(data) {
        let imgHtml = '',
            tipHtml = '';
        data.forEach((item, index) => {
            imgHtml += `<li><img src="${item.img}" alt=""></li>`;
            tipHtml += (index == 0 ? ` <li class="current"></li>` : ` <li></li>`)
        });
        $ul.html(imgHtml);
        $tipBox.html(tipHtml);
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
        }, 600).siblings().animate({
            opacity: 0
        },600, function () {
            $lis.eq(n).siblings().hide();
        });
        tipFocus();
    }

    function autoMove() {
        timer = setInterval(() => {
            move();
        }, 5000)
    }
    function tipFocus(){
        $tips.eq(n).addClass('current').siblings().removeClass('current');
    }
    function throttle(fn,wait=800){
        let flag = true;
        return function(){
            if(!flag)return ;
            setTimeout(()=>{
                flag = true;
                fn.apply(this,arguments);
            },wait);
        }
    }
    function eventBind(){
        $box.on('mouseenter',function(){
            clearInterval(timer);
        });
        $box.on('mouseleave',function(){
            autoMove();
        });
        $leftBtn.on('click',throttle(function(){
            n--;
            if(n<0){
                n = $lis.length-1;
            }
            n--;
            move();
        }));
        $rightBtn.on('click',throttle(function(){
            move();
        }));
        $tips.on('click',function(){
            let index = $(this).index();
            n = index;

            n--;
            move();
        })
    }
    return {
        init() {
            idSelector = '#' + this.attr('id');
            getData();
            initEle();
        }
    }
})();

$.fn.extend({
    bannerInit: banner.init
});
$('#box').bannerInit();