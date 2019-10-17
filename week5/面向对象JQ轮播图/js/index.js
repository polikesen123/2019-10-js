let banner = (function () {
    let idSelector = '',
        $box = null,
        $imgBox = null,
        $lis = null,
        $tipBtn = null,
        $tips = null,
        $left = null,
        $right = null;
    let n = 0,
        timer = null;

    function throttle(fn, wait = 500) {
        let flag = true;
        return function () {
            if (!flag) return;
            flag = false;
            setTimeout(() => {
                flag = true;
                fn.apply(this, arguments);
            }, wait)
        }
    }

    function getEle() {
        $box = $(idSelector);
        $imgBox = $box.find('.imgBox');
        $lis = $imgBox.children('li');
        $tipBtn = $box.find('.tipBtn');
        $tips = $tipBtn.children('li');
        $left = $box.find('.left');
        $right = $box.find('.right');
        $lis.eq(0).show().siblings().hide();
    }

    function getData() {
        $.ajax({
            type: 'get',
            url: './data.json',
            success: function (data) {
                render(data)
                getEle();

            }
        })
    }

    function render(data) {
        let html = '',
            tipStr = '';
        data.forEach((item, index) => {
            html += `  <li><img src="${item.img}" alt=""></li>`;
            tipStr += (index == 0 ? ` <li current></li>` : `<li></li>`)
        });
        $imgBox.html(html);
        $tipBtn.html(tipStr);
    }
    return {
        init: function(){
            console.log(this)
            idSelector = '#' + this.attr('id');
            getData()
            getEle();

        }
    }
})();

$.fn.extend({
    bannerInit: banner.init()
})
$('#swiperBox').bannerInit()