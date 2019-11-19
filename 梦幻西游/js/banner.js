function turn() {
    let channelBtn = document.querySelector('.banner .channelBtn'),
        chaBtns = channelBtn.querySelectorAll('a')
    banns = document.querySelectorAll('.banner .bann');
    let btn = chaBtns[0];
    for (let i = 0; i < chaBtns.length; i++) {
        chaBtns[i].index = i;
        chaBtns[i].onclick = function () {
            // 清除类名：
            if (this === btn) return;
            btn.classList.remove('current');
            banns[btn.index].style.display = 'none'
            this.classList.add('current');
            banns[i].style.display = 'block';
            btn = this;
        };
    }
}
turn();

function banner() {
    let $bannerBox = $('.bannerBox')
    function throttle(fn,wait=500){
        let flag = true;
        return function () {
            if(! flag)return;
            flag = false;
                setTimeout(()=>{
                    flag = true;
                    fn.apply(this,arguments)
                },wait)
            
        }
    }

    function banFn1() {
        let $banner1 = $bannerBox.find('.banner1'),
            $ban1 = $banner1.find('.ban1'),
            $lis = $ban1.find('li'),
            $changeBtn = $banner1.find('.changeBtn'),
            $spans = $changeBtn.find('span');
        let n = 0,
            timer = null;
        $lis.eq(0).siblings().hide();

        function move() {
            n++;
            if (n > $lis.length) {
                n = 0;
            }
            $lis.eq(n).css({
                opacity: 0
            }).show().animate({
                opacity: 1
            }, 500).siblings().animate({
                opacity: 0
            }, 500, function () {
                $lis.eq(n).siblings().hide();
            })
            autoFocus();
        }

        function autoMove() {
            timer = setInterval(() => {
                move()
            }, 2500);
        }
        autoMove();

        function autoFocus() {
            $spans.eq(n).addClass('current').siblings().removeClass('current');
        }
        $bannerBox.on('mouseenter', function () {
            clearInterval(timer)
        })
        $bannerBox.on('mouseleave', function () {
            autoMove();
        })
        $spans.each((index, item) => {
            $(item).on('mouseenter', function () {
                $(item).addClass('current').siblings().removeClass('current');
                $lis.eq(index).css({
                    opacity: 0
                }).show().animate({
                    opacity: 1
                }, 200).siblings().animate({
                    opacity: 0
                }, 200, function () {
                    $lis.eq(index).siblings().hide();
                })
            })
        })
    }
    banFn1();
    //第二个录播图
    function banFn2() {
        let $banner2 = $bannerBox.find('.banner2'),
            $ban2 = $banner2.find('.ban1'),
            $lis2 = $ban2.find('li'),
            $changeBtn2 = $banner2.find('.changeBtn'),
            $spans2 = $changeBtn2.find('span');
        let n = 0;
        $lis2.eq(0).show().siblings().hide()
        $spans2.each((index, item) => {
            $(item).on('mouseenter', function () {
                $(item).addClass('current').siblings().removeClass('current');
                $lis2.eq(index).css({
                    opacity: 0
                }).show().animate({
                    opacity: 1
                }, 200).siblings().animate({
                    opacity: 0
                }, 200, function () {
                    $lis2.eq(index).siblings().hide();
                });
            })
        })
    }
    banFn2();

    function banFn3() {
        let $mainBox = $('.mainBox'),
            $right = $mainBox.find('.right'),
            $sBtns = $right.find('.right-top span'),
            $line = $right.find('.right-top i'),
            $slideItem = $right.find('.slideBox .slideWrapper .slide-item');
        $slideItem.eq(0).show().siblings().hide();
        $sBtns.each((index, item) => {
            $(item).on('mouseenter', function () {
                $line.css({
                    left: index * 75 + 'px'
                });
                $slideItem.eq(index).show().siblings().hide();
            })
        })
    }
    banFn3();
}
banner();
//梦幻热点
function dreamHot() {
    let $dreamHot = $('.dreamHot'),
        $spanBtns = $dreamHot.find('.centerHot .hotMain .hotMain-title span'),
        $line = $dreamHot.find('.centerHot .hotMain .hotMain-title i'),
        $itemContent = $dreamHot.find('.centerHot .hotMain .sliderBox .hotMain-content');
        console.log($dreamHot,$spanBtns,$line,$itemContent)
    $itemContent.eq(0).show().siblings().hide();
    $spanBtns.each((index, item) => {
        $(item).on('mouseenter', function () {
            $line.css({
                left: index * 70+ 'px'
            });
            $itemContent.eq(index).show().siblings().hide();
        })
    })
}
dreamHot();