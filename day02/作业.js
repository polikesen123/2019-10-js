//---------------------------------------------------------
var n = 10;

function outer() {
    var n = 15;

    function inner(n) {
        console.log(n)

        function center() {
            n++;
            console.log(n);
        }
        center();
    }
    inner(n);
}
outer();

//---------------------------------------------------------------
var n = 20;

function outer() {
    ++n;

    function inner() {
        console.log(n++);

        function center() {
            n += 2;
            console.log(n);
        }
        center();
    }
    inner();
};
outer();
console.log(n)



//----------------------------------------------------
alert(a);
console.log("a" in window);
if (!("a" in window)) {
    var a = 10;
}
alert(a);

console.log(fn);
if (9 == 8) {
    function fn() {
        alert(2);
    }
}
//    ---------------------------------
f = function () {
    return true
};
g = function () {
    return false
};
(function () {
    console.log(g);
    if (g() && [] == ![]) {
        f = function f() {
            return false
        };
    }

    function g() {
        return true
    };
})();
alert(f());
alert(g())

// ==========================================
var x = 5/6/7/8

function fn() {
    return function (y) {
        console.log(y + (++x));
    }
}
var f = fn(6);
f(7);//13
fn(8)(9);//16
f(10);//18
console.log(x);8

//================================================
var x = 0,//2 1
    y = 1;

function fn() {
    x += 2;
    fn = function (y) {
        console.log(y + (--x));//5  4+2-1
    };
    console.log(x, y);//2 1
}
fn(3);
fn(4); //5
console.log(x, y);  //1 1

//=================================================
function fn() {
    var i = 5; //4 
    return function (n) {
        console.log(n * (--i))
    }
}
var f = fn();
f(10); //40
fn()(10);//40
fn()(20);//80
f(20); //60

//==============================================
var i = 2;//4 3 2

function fn() {
    i += 2;//i=i+2
    return function (n) {
        console.log(n + (--i));
    }
}
var f = fn();
f(2);//5
f(3);//5
fn()(2);//5
fn()(3);//7
f(4);//7

// ==================================================
var n = 10;

function fn() {
    var n = 20;//21

    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();//f   21
x();//22
x();//23
console.log(n);//10