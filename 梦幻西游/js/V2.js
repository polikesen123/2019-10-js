//游戏全菜单显示隐藏
let menu = document.querySelector('.topBarBox .topNav .menu'),
    menuBox = document.querySelector('.topBarBox .topBar-menuBox');
menu.addEventListener('mouseenter', function () {
    console.log(666)
    menuBox.classList.toggle('topBar-menuBox-current');
})
menu.addEventListener('mouseleave', function () {
    menuBox.classList.toggle('topBar-menuBox-current');
})
menuBox.addEventListener('mouseenter', function () {
    menuBox.classList.toggle('topBar-menuBox-current');
})
menuBox.addEventListener('mouseleave', function () {
    menuBox.classList.toggle('topBar-menuBox-current');
})


// 热门推荐
let topBarComend = document.querySelector('.topBar-commend'),
    topBarHotRecommend = document.querySelector('.topBarBox .hotRecommend');
topBarHotRecommend.addEventListener('mouseenter', function () {
    topBarComend.classList.toggle('topBar-commend-hover');
})
topBarHotRecommend.addEventListener('mouseleave', function () {
    topBarComend.classList.toggle('topBar-commend-hover');
})
topBarComend.addEventListener('mouseenter', function () {
    topBarComend.classList.toggle('topBar-commend-hover');
})
topBarComend.addEventListener('mouseleave', function () {
    topBarComend.classList.toggle('topBar-commend-hover');
})
//新闻图片
let news = document.querySelector('.news-img'),
    showNews = document.querySelector('.topBar-news');
news.addEventListener('mouseenter', function () {
    showNews.style.display = 'block';
    console.log(555)
})
news.addEventListener('mouseleave', function () {
    showNews.style.display = 'none';
})
showNews.addEventListener('mouseenter', function () {
    showNews.style.display = 'block';
})
showNews.addEventListener('mouseleave', function () {
    showNews.style.display = 'none';
})