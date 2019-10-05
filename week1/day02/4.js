var a = 1;
function fn(){
    console.log(a);
    var a=5;
    console.log(a);
    a++;
    var a;
    fn3();
    fn2();
    console.log(a);
    function fn2(){
        console.log(a);
        a=20;
    }
}
function fn3(){
    console.log(a);
    a =200;
}
fn();
console.log(a);