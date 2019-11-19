let bell = document.getElementById('bell');
let say = document.getElementById('say');
let bgm = document.getElementById('bgm');

function loadBox() {
    let loadingBox = document.querySelector('.loadingBox');
    let progress = document.querySelector('.progress'); //获取进度条
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'
    ];
    //n = 0;记录加载过得张数
    let n = 0;
    ary.forEach(item => {
        let img = new Image();
        img.src = `./images/${item}`;
        img.onload = function () {
            n++;
            let per = n / ary.length;
            progress.style.width = per * 100 + '%';
            if (n === ary.length) {
                // 所有图片都一经加载完成
                progress.addEventListener('transitionend', function (e) {
                    e.stopPropagation();
                    btn.classList.remove('hide');
                    // 阻止progress动效完成之后的冒泡
                }, false)
            }
        }
    })
    btn.ontouchend = function () {
        loadingBox.style.opacity = 0;
        loadingBox.addEventListener('transitionend', function (e) {
            // console.log(e)
            if (e.propertyName === 'opacity') {
                bell.play();
                loadingBox.classList.add('hide');
                phoneBoxFn(); // 第一屏完成之后再来第二屏
            }
        }, false)
    }
}
loadBox();

function phoneBoxFn() {
    let phoneBox = document.querySelector('.phoneBox');
    let circle = document.querySelector('.phoneBox .circle');
    let timeBox = document.querySelector('.phoneBox header h3');
    let footer = document.querySelector('.phoneBox footer');
    let overBox = document.querySelector('.phoneBox .overBox');
    let overBtn = overBox.querySelector('.overBtn');
    let clearFn = null; //为了清除时间定时器

    circle.addEventListener('touchend', function () {
        timeBox.classList.remove('hide'); //显示时间
        footer.classList.add('hide');
        overBox.classList.remove('bot')
        bell.pause(); //点击挂机键 铃声停止 
        say.play(); //语音播放
        clearFn = changeTime();
    }, false) //passive = true  先执行 默认事件，
    //capture = true  在捕获阶段触发
    overBtn.ontouchend = function () {
        //点击 挂机键
        phoneBox.style.transform = 'translateY(110%)';
        phoneBox.addEventListener('transitionend', function (e) {
            console.log(e)
            chatBoxFn(); //上一屏幕完全消失之后 执行
            say.pause();
            clearFn();
            bgm.play();
            phoneBox.classList.add('hide');
        }, false)
    }

    function changeTime() {
        //设置时间
        let timer = setInterval(() => {
            // say.currentTime//当前播放时间
            let t = parseInt(say.currentTime);
            timeBox.innerHTML = `00:${t < 10 ? '0' + t : t}`;
            if (say.ended) {
                clearInterval(timer);
                phoneBox.style.transform = 'translateY(110%)';
                chatBoxFn(); //上一屏幕完全消失之后 执行
                bgm.play();
            }
        }, 1000);
        return function () {
            clearInterval(timer);
        }
    }
}

function chatBoxFn() {
    let chatMsgBox = document.querySelector('.chatBox .chatMsgBox');
    let oLis = document.querySelectorAll('.chatBox ul li');
    let keyboard = document.querySelector('.chatBox .keyboard');
    let p = keyboard.querySelector('p');
    let chatBtn = keyboard.querySelector('.chatBtn');
    let timer = null;
    let n = 0; //记录显示的信息条数
    timer = setInterval(() => {
        oLis[n].classList.remove('opa');
        n++;
        if (n == 3) {
            clearInterval(timer);
            setTimeout(() => {
                keyboard.classList.remove('bot');
                setTimeout(() => {
                    input();
                }, 1000);
            }, 1000);

        }
    }, 1000);

    function input() {
        var str = '我们现在使用的是VUE和REACT';
        let n = 0;
        let timer = null;
        timer = setInterval(() => {
            p.innerHTML += str[n];
            n++;
            if (n >= str.length) {
                clearInterval(timer);
                //输入完成之后 让btn 亮起来
                chatBtn.classList.remove('hide');
                //加一个定时器 
            }
        }, 200);
    }
    chatBtn.ontouchend = function () {
        p.innerHTML = ''; //清空注入框
        keyboard.classList.add('bot'); //清空注入框键盘下去
        oLis[n].classList.remove('opa'); //第四条信息直接出现
        n++;
        timer = setInterval(() => {
            oLis[n].classList.remove('opa');
            move();
            n++;
            if (n === oLis.length) {
                //所有对话都出现完成
                clearInterval(timer)
            }
        }, 1000);
    }
    //让整个信息盒子向上移动，每次移动出现的信息条的高度
    let t = 0; //向上移动的高度
    function move() {
        //移动ul
        let h = oLis[n].clientHeight;
        t += h;
        chatMsgBox.style.transform = `translateY(-${t}px)`;
    }

}