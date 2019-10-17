$.fn.extend({
    myFn: function () {
        console.log(666);
        console.log(this);

    },
    banner: function () {
        let $box = this;
        let $ul = $box.find('ul')
        let $tipBox = $box.find('.tipbox')
        let $tips = $box.find('.tip')
        let $leftBtn = $box.find('.leftbtn')
        let $rightBtn = $box.find('.rightbtn');
        let n = 0,
            timer = null;

        function getData() {
            $.ajax({
                type: 'get',
                url: './data.json',
                success: function (data) {
                    console.log(data);
                    render(data);
                    tipClick()
                },
                error: function () {
                    console.log('失败')
                }
            })
        }
        getData()


        function render(data) {
            let str = '';
            let tipstr = '';
            data.push(data[0]);
            data.forEach((item, index) => {
                str += `<li>
                <img src="${item.img}" alt="">
                <p class="desc">${item.desc}</p>
            </li>`;
                if (index == 0) {
                    tipstr += `<span class="tip current"></span> `
                } else if (index < data.length - 1)
                    tipstr += `<span class="tip"></span> `
            })
            $ul.html(str);
            $ul.width(590 * data.length);
            $tipBox.html(tipstr);
            $tips = $tipBox.children('.tip')
        }

        function move() {
            n++;
            if (n > $tips.length) {
                $ul.css('left', 0);
                n = 1;

            }
            $ul.animate({
                left: -590 * n
            }, 400)
            autofocus(n)
        }

        function automove() {
            timer = setInterval(() => {
                move()
            }, 3000)
        }
        automove()

        function autofocus(m) {
            if (m > $tips.length) {
                m = 0;

            }
            $tips.eq(m).addClass('current').siblings().removeClass('current')
        }



        $box.on('mouseenter', function () {
            clearInterval(timer)
        });
        $box.on('mouseleave', function () {
            automove()
        });
        $leftBtn.on('click', function () {
            n--;
            if (n < 0) {
                $ul.css({
                    left: -$tips.length * 590
                })
                n = $tips.length - 1;
            }
            $ul.animate({
                left: 590 * -n
            }, 200)
            autofocus(n)
        })
        $rightBtn.on('click', function () {
            move()
        })

        function tipClick() {
            $tips.on('click', function () {
                let m = $(this).index();
                n = m;
                $ul.animate({
                    left: -590 * m
                }, 200)
                autofocus(m)
            })
        }

    }
})
$('#box').banner();
$.extend({
    myFn: function () {
        console.log(444)
    }
})