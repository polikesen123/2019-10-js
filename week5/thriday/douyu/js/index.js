var Girls = document.querySelector('.Girls');
var lol = document.querySelector('.lol');
var Judi = document.querySelector('.Judi');
var crossFire = document.querySelector('.crossFire');
var kingGlory = document.querySelector('.king-glory');
var Genting = document.querySelector('.Genting');
var Secondary = document.querySelector('.Secondary');
var CompetitiveG = document.querySelector('.CompetitiveG');
var networkG = document.querySelector('.networkG');
var LivingG = document.querySelector('.LivingG');
var phoneG = document.querySelector('.phoneG');
var Blizzard = document.querySelector('.Blizzard');
var Entertainment = document.querySelector('.Entertainment');
var TechEdu = document.querySelector('.Tech-edu');
var lis = document.querySelectorAll('.left-side li');
// var divs = document.querySelectorAll('.mainBoxIn div');
const divAry = [Girls, lol, Judi, crossFire, kingGlory, Genting, Secondary, CompetitiveG, networkG, LivingG, phoneG, Blizzard, Entertainment, TechEdu];
// console.log(divAry)
var aside = document.querySelector('.left-side');
let n = 0,
    timer = null;
window.onscroll = function (ary) {
    this.showSide(this.Girls);
    let sMax = document.documentElement.scrollTop + 400;
    for (let i = 0; i < this.lis.length; i++) {
        let l = utils.offset(divAry[i]).t;
        if (l < sMax) {
            clearClass(lis);
            click(lis)
            lis[i].classList.add('current');
        }
    }
}

function click(ary) {
    let s = document.documentElement.scrollTop;
    [...ary].forEach((item, index) => {
        item.onclick = function () {
            clearInterval(timer)
            let h = utils.offset(divAry[index]).t;//点击的那个Li对应的div距离body高度
            n = index * divAry[0].clientHeight + index * 20;
            let l = h-s
            if (l > n) {
                timer = setInterval(() => {
                    l -= 10;
                    if (s < n) {
                        s = l;
                        clearInterval(timer)

                    }
                    document.documentElement.scrollTop = s;
                }, )
            }
            if (l < n) {
                timer = setInterval(() => {
                    l += 10;
                    if (s >= n) {
                        s = l;
                        clearInterval(timer)

                    }
                    document.documentElement.scrollTop = s;
                }, 100)
            }

        }
    })
}

function clearClass(ary) {
    [...ary].forEach(item => {
        item.classList.remove('current')
    })
}

function showSide(ele) {
    let scrT = document.body.scrollTop || document.documentElement.scrollTop; //卷去的高度
    let t = utils.offset(ele).t; //元素到body的偏移量
    if (t - scrT <= 100) {
        aside.style.display = 'block';
    } else {
        aside.style.display = 'none';
    }
}