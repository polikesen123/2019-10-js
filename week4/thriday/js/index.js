let divs = document.querySelectorAll('.box .top div');
let descs = document.querySelectorAll('.box .top .desc');
let cans = document.querySelectorAll('.box .top .cancel');
console.log(descs,cans)
let lis = document.querySelectorAll('.box .body_box li');
// console.log(divs,lis)
let bSpans = document.querySelectorAll('.box .body_box .Bra span');
let sSpans = document.querySelectorAll('.box .body_box .S span');
let sySpans = document.querySelectorAll('.box .body_box .Sys span');
let nSpans = document.querySelectorAll('.box .body_box .Net span');
console.log(bSpans,sSpans,sySpans,nSpans)
lis.forEach((item,index) => {
    item.onclick = function () {
        divs[index].style.display = 'block';
    }
});
cans.forEach((item,index)=>{
    item.onclick = function () {
        divs[index].style.display = 'none';
    }
})
bSpans.forEach((item,index)=>{
    item.onclick = function () {
        descs[0].innerHTML = bSpans[index].innerHTML
    }
})
sSpans.forEach((item,index)=>{
    item.onclick = function () {
        descs[1].innerHTML = sSpans[index].innerHTML
    }
})
sySpans.forEach((item,index)=>{
    item.onclick = function () {
        descs[2].innerHTML = sySpans[index].innerHTML
    }
})
nSpans.forEach((item,index)=>{
    item.onclick = function () {
        descs[3].innerHTML = nSpans[index].innerHTML
    }
})
// function render(eles,rens) {
//     rens.forEach((item1,index1)=>{
//         eles.forEach((item2,index2)=>{
//             item2.onclick = function () {
//                 item1[index1].innerHTML = eles[index2].innerHTML;
//             }
//         });
//     });  
// }