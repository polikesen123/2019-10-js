//获取数据 展示到页面
let data = null;
let olis = document.getElementsByTagName('li');
let olis2 = document.querySelectorAll('li');
//getElement系列获取到的元素是有一一映射关系的；当页面上增加或者减少了 对应的元素；该变量会跟着默认能改变
//query系列获取到的元素没有这种映射关系，获取到的时候是哪些元素，那么对应的元素就永远是哪些元素
console.log(olis);
let xhr = new XMLHttpRequest();//创建实例
xhr.open('get','./data.json',true);//true代表异步，false 代表同步
xhr.onreadystatechange = function(){
    if(xhr.readyState ==4 && xhr.status == 200){
        // console.log(JSON.parse(xhr.response));
        data = JSON.parse(xhr.response);
        render(data);//请求成功之后 再去渲染数据
        myBind();
    }
}
xhr.send();
let box = document.getElementById('box'),timeBtn = document.getElementById('timeBtn'),priceBtn = document.getElementById('priceBtn'),commentBtn = document.getElementById('commentBtn');
 function render(ary){
     //把数据渲染到页面
     console.log(ary);//ary就是后台传过来的数组
     let str = '';
     ary.forEach(item => {
         //item 数组中的每一个对象
         let {img,title,price ,num,time} = item;//对象的解构赋值
         str +=`<li>
         <div class="imgBox">
             <img src="${img}"
                 alt="">
         </div>
         <div class="til">${title}</div>
         <div class="desc" qqq =${time} ></div>
         <div class="price">${price}</div>
         <div class="botBox">
             <div>选购</div>
             <div>${num}评价</div>
         </div>
     </li>`
     //str就是拼接好的字符串
     });
     box.innerHTML = str;
 }
 //点击上架时间按钮
 function myBind(data){
     timeBtn.onclick = function (){
         let ary = [...olis];
         ary.sort((a,b)=>{
             return a.getAttribute('qqq')-b.getAttribute('qqq')
         })
         ary.forEach(item=>box.appendChild(item));
        //若添加的页面上已经存在了的元素，那么只相当于只是改变一下元素的位置，不会新增元素
        //dom回流 当页面结构发生改变时候，需要浏览器重新渲染页面 ，凡是页面中某个元素位置改了 都会引发dom回流
        //dom重绘 结构不发生改变 只是样式（除了那些改变位置的修改）需要修改的时候 ，也就是只需要从渲染对应css的时候
        //虚拟dom 文档碎片 var a = document.createDocumentFragment()
        
     }
 }
   
 

