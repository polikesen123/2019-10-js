let music = document.querySelector('.music');
let cry = document.querySelector('#cry');
let $parts = $('section'),
    $music = $('.music'),
    $cry = $('.cry');

// console.log($parts)
music.addEventListener('touchstart', function () {
    if (cry.paused) {
        cry.play();
        music.style.animationPlayState = 'running';
    } else {
        cry.pause();
        music.style.animationPlayState = 'paused';
    }
});
let n = 0,
    timer = null;
// $parts.eq(0).show().siblings().hide();

function move() {
    n++;
    if (n > $parts.length - 1) {
        return;
    }
    $parts.eq(n).show().css({
        opacity: 0
    }).animate({
        opacity: 1
    }, 300).siblings().animate({
        opacity: 0
    }, 300, function () {
        $parts.eq(n).siblings().hide();
    })

}

function autoMove() {
    timer = setInterval(() => {
        move();
    }, 4000)

}
autoMove();