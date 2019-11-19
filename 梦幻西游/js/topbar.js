let menu = document.getElementById('menu'),
    topBarMenu = document.getElementById('topBar-menu'),
    topBarComend = document.getElementById('topBar-commend'),
    topBarHotRecommend= document.getElementById('topBar-hotRecommend');
menu.onmouseenter = function () {
    topBarMenu.style.height = '500px';
   
}
menu.onmouseleave = function(){
    topBarMenu.style.height = '0px';
}
topBarMenu.onmouseenter = function () {
    topBarMenu.style.height = '500px';
   
}
topBarMenu.onmouseleave = function(){
    topBarMenu.style.height = '0px';
}
topBarHotRecommend.addEventListener('mouseenter',function(){
    topBarComend.classList.toggle('topBar-commend-hover');
    console.log(111)
})
topBarHotRecommend.addEventListener('mouseleave',function(){
    topBarComend.classList.toggle('topBar-commend-hover');
    console.log(666)
})
topBarComend.addEventListener('mouseenter',function(){
    topBarComend.classList.toggle('topBar-commend-hover');
})
topBarComend.addEventListener('mouseleave',function(){
    topBarComend.classList.toggle('topBar-commend-hover');
    console.log(666)
})