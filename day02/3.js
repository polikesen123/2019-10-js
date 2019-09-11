var c= d = 10; //=>var a =10 ,b=10;  b没变量提升
var a = 10, b=20;//=>var a=10;var b=10;
function test(){
    if('a' in window){
        var a = 1000;
    }else{
        var a = 100;
    }
    console.log(a);
}
test();
console.log(a);