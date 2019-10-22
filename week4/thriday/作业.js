//1.--------------------------------------------
var a = 'abc' + 123 + 456;
alert(a); //'abc123456'
var b = '456' - '123';
alert(b); //'333'
var c = 1;
d = '1';
var f = c > d ? (c < d ? c : d) : (c == d ? c : d);
alert(f); //'1'

//--------------------------------------------
var str = 'abc123',
    num = parseFloat(str);
if (num === NaN) {
    alert(NaN);
} else if (num === 123) {
    alert(123);
} else if (typeof num === 'number') {
    alert('number');
} else {
    alert('str');
}
//输出 ：'number'
//2.----------------------------------------------
let point = {
    x: 10,
    y: 20,
    moveTo: function (x, y) {
        let moveX = function (x) {
            this.x = x;
        }
        let moveY = function (y) {
            this.y = y;
        }
        moveX(x);//这俩执行时候没点this就是window
        moveY(y);
    }
};
point.moveTo(100, 200);
console.log(point.x, point.y); //----->10 20

let point = {
    x: 10,
    y: 20,
    moveTo: function (x, y) {
        let moveX =  (x)=> {
            this.x = x;
        }
        let moveY =  (y)=> {
            this.y = y;
        }
        moveX(x);//this是moveTo里面的
        moveY(y);
    }
};
point.moveTo(100, 200);
console.log(point.x, point.y);//100,200
//4.insertafter------------------------------
function insertAfter(newEle, originEle) {
    //=>newEle:新插入的元素
    //=>originEle:指定的老元素
    //思路：在老元素的后边元素的前边插入 
    if (originEle === null) return;
    var parent = originEle.parentNode;
    if (parent.lastChild === originEle) {
        if (typeof newEle === 'string') {
            var temp = document.createElement('div');
            temp.innerHTML = newEle;
            var flag = document.createDocumentFragment();
            while (temp.firstChild) {
                flag.appendChild(temp.firstChild);
            }
            parent.appendChild(flag);
        } else {
            parent.appendChild(newEle)
        }
    } else {
        if (typeof newEle === 'string') {
            var temp = document.createElement('div');
            temp.innerHTML = newEle;
            var flag = document.createDocumentFragment();
            while (temp.firstChild) {
                flag.appendChild(temp.firstChild);
            }
            parent.insertBefore(flag, originEle.nextSibling);
        }else{
            parent.insertBefore(newEle,originEle.nextSibling);
        }
    }

}