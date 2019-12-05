// 第一题
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);//false
console.log(f1.getY === f2.getY);//true
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
console.log(f1.__proto__.getX === f2.getX);//false
console.log(f1.getX === Fn.prototype.getX);//false
console.log(f1.constructor);//fn
console.log(Fn.prototype.__proto__.constructor);//Object类
f1.getX();//100
f1.__proto__.getX();//undefined
f2.getY();//200
Fn.prototype.getY();//400
f1.sum();//300
Fn.prototype.sum();//NaN

// 第二题
function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);}; // 当作对象
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}

Foo.getName();//2
getName();//4
Foo().getName(); //1
getName();//1
var a = new Foo.getName();//2
var b = new Foo().getName();//3
var c = new new Foo().getName();//3
console.log(a,b,c);

// 第三题
function Person() {
    this.name = 'zhufeng'
};
Person.prototype.getName = function () {
    console.log(this.name)
};
Person.prototype.age = 5000;

var per1 = new Person;
per1.getName();//zhufeng
per1.age = 9;
console.log(per1.age);//9
var per2 = new Person;
console.log(per2.age);//5000