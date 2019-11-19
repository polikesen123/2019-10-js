$.fn.extend({
    myFn: function () {
        console.log(444)
        console.log(this)

    },
    banner: function () {
        let $box = this;
        let $ul = $box.find('ul');
        let $tipBox = $box.find('.tipbox');
        console.log($ul, $tipBox);
        // let $tips=$box.find('.tip');
        let $tips = $tipBox.children('.tip');
        // console.log($tips)
        let $leftBtn = $box.find('.leftbtn');
        // console.log($leftBtn)
        let $rightBtn = $box.find('.rightbtn');
        let n = 0,
            timer = null;

        function getData() {
            $.ajax({
                type: 'get',
                url: './data.json',
                success: function (data) {
                    console.log(data)
                    render(data)
                    tipClick()
                },
                error: function () {
                    console.log('失败')
                }
            })
        }
        getData();

        function render(data) {
            let str = '';
            let tipstr = '';
            data.push(data[0]);
            data.forEach((item, index) => {
                str += ` <li>
                <img src="${item.img}" alt="">
                <p>${item.desc}</p>
            </li>`;
                if (index == 0) {
                    tipstr += ` <span class="tip current"></span> `
                } else if (index < data.length - 1) {
                    tipstr += `<span class="tip"></span> `
                }
            });
            // console.log(str)
            $ul.html(str)
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
            // console.log(n)
            $ul.animate({
                left: -590 * n
            }, 300);
            autofocus(n)
            console.log(666)

        }
        function atuoMove() {
            timer = setInterval(() => {
                move();
            }, 2000)
        }
        atuoMove()
        function autofocus(m) {
            if (m >= $tips.length) {
                m = 0;
            }
            $tips.eq(m).addClass('current').siblings().removeClass('current')
        }

        $box.on('mouseenter', function () {
            clearInterval(timer)
        });
        $box.on('mouseleave', function () {
            atuoMove()
        })
        $leftBtn.on('click', function () {
            console.log(999)
            n--;
            if (n < 0) {
                $ul.css({
                    left: -$tips.length * 590
                });
                n = $tips.length - 1;

            }
            console.log( '点击左边的'+n)
            $ul.animate({
                left: -n * 590
            }, 200)
            autofocus(n)
        })

        $rightBtn.on('click', function () {
            move();
        })

        function tipClick() {
            $tips.on('click', function () {
                let m = $(this).index();
                n = m;
                $ul.animate({
                    left: -590 * m
                }, 200);
                autofocus(m)
            })
        }
    }
})
$('#box').banner()