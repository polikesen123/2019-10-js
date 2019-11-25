function func(n,o){
    console.log(o)
    return {
        func:function(m){
            return func(m,n)
        }
    }
}
var a = func(0);a.func(1);a.func(2);a.func(3)
var b = func(0).func(1).func(2).func(3);
var c = func(0).func(1);c.func(2);c.func(3)

//======================================
function Foo(){
    getName=function(){
        console.log(1)
    }
    return this;
}
Foo.getName = function(){
    console.log(2)
}
Foo.prototype.getName = function(){
    console.log(3)
}
var getName = function(){
    console.log(4)
}
function getName(){
    console.log(5)
}
Foo.getName();//2
getName()//4
Foo().getName()//1
getName();//1
new Foo.getName()//2
new Foo().getName()//3
new new Foo().getName()//3