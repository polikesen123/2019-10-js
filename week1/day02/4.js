var a = 1;//100
function fn(){
    console.log(a);//undefined
    var a=5;
    console.log(a);//5
    a++;//6
    var a;
    fn3();//1
    fn2();
    console.log(a);//20
    function fn2(){
        console.log(a);//6
        a=20;
    }
}
function fn3(){
    console.log(a);
    a =200;
}
fn();
console.log(a);//200