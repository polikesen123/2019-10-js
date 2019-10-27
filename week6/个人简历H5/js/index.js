let music = document.querySelector('.music');
let cry = document.querySelector('#cry');
console.dir(cry)
music.addEventListener('touchstart',function(){
    if(cry.paused){
        cry.play();
        music.style.animationPlayState = 'running';
    }
    else{
        cry.pause();
        music.style.animationPlayState = 'paused';
    }
})
