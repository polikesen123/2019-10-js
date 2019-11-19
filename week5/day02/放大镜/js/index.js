let imgBox = document.getElementById('img_box');
let mask = document.getElementById('mask');
imgBox.onmouseenter = function () {
    mask.style.display = 'block';   
}
imgBox.onmousemove = function (e) {
    // console.log(e.pageX,e.pageY)
    // console.log('top:', mask.style.top,'left:', mask.style.left)
    mask.style.top = e.clientY + 'px';
    mask.style.left = e.clientX + 'px';
}
imgBox.onmouseleave = function () {
    mask.style.display = 'none';
    imgBox.onmousemove = null;
}