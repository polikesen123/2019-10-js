console.log(a);//undefined
var a = 12;//13

function fn() {
    console.log(a);//12
    a = 13;
}
fn();

//-------------------------------------

console.log(a, b, c); //undefined undefined undefined
var a = 10,
    b = 20,
    c = 30;//100

function f(a) {//a=10 b=undefined
    console.log(a, b, c);//10 undefined 30
    var b = a = c = 100;
    console.log(a, b, c) //100 100 100
}
f(10, 20);
console.log(a, b, c);//10 20 100

//-------------------------------------

a(); //1
var a = c = function () {
    console.log(2)
};
a(); //2
function a() {
    console.log(1)
};
a(); //2

//---------------------

var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);//10
}
bar();

//-------------------------------------
//a c 
function a() {
    console.log(1)
};
function c() {//c function a(){console.log(3)}
    console.log(2)
}
(function (b) {//b=function(){console.log(1)} ->function b(){console.log(4)}
    b(); //4
    c(); //2
    var b = c = function a() {//b function a(){console.log(3)}
        console.log(3)
    };

    function b() {
        console.log(4)
    }
    b(); //3
})(a);
c();//3

//---------------------------
//n a 
var n = 5;

function a(n) {//n=undefined
    n++;
    n = 10; 
    b();

    function b() {
        n++;//11
        alert(n);//11
    };
}
a();//11
alert(n);//5

//---------------------------------
//n fn f
var n = 10;

function fn() {//n f
    var n = 20; //21  22 23
    function f() {
        n++;
        console.log(n)
    };
    f();
    return f
}
var f = fn();//21
f();//22
f();//23
console.log(n);//10

//======================
//i fn f
var i = 1;

function fn(i) {//i=2 3
    return function (n) {
        console.log(n + (++i))
    }
}
var f = fn(2);
f(3);//6 i=3
fn(5)(6) //i=5 6   6+6->12
fn(3)(2)//i=3 4  2+4->6
f(4); //i=3 4 4+4->8

//--------------------

let i = 1;
let fn = function (n) {//n=2 3 4
    i *= 2;//i=2 8 16
    return function (m) {
        n++; 
        i += n + m;
        console.log(i);
    }
};
let f = fn(2);
f(3);//m=3 n=3 i=2+3+3 ->8
fn(2)(3);//n=2 i=8*2=16 m=3 n=3 i=16+3+3->22
f(4);//m=4 n=4 ->          30
f(5);//m=5 n=5 ->         40

//-----------------------------this
var x = 1,//4
    y = 2;//6
function fn(x) {//x=3 4
    this.x *= (++x);
    fn = function (y) {//y=4 3
        this.y *= (--y);//
        console.log(x + y);//4+3=7
    }
    console.log(x + y);//4 2
    return fn;
}
fn(3)(4);
fn(5)
console.log(x + y);//10

//6 7 8 28

//-------------------------------------
//x obj fn
var x = 1;//2 8
var obj = {x: 2};//12
obj.fn = (function (x) {//x=2 3
    this.x *= x++;
    return function (y) {//2
        x += y;//5 6
        this.x *= ++x;
        console.log(x);//6
    }
})(obj.x);
var fn = obj.fn;
obj.fn(2);//y=2 x=3+2->5 6
fn(1);//y=1 x=3+1=4 
console.log(obj.x, x);

//6 8 
//12 16

//-------------------------------------
var x=2;//4
var y={
    x:3,
    z:(function(x){//x=2  4
        this.x*=x;
        x+=2;
        return function(n){
            this.x*=n;
            x+=3;
            console.log(x);
        }
    })(x)
};
var m=y.z;//function(n){this.x*=n...}
m(4);//n=4 
y.z(5);
console.log(x, y.x);
//7 10
//16 15