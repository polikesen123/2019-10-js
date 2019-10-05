console.log(num,str);
var num = 18;
var str = 'lily';
function fn2(){
    console.log(str,num);
    num =19;
    str = 'candy';
    var num = 14;
    console.log(str,num);
}
fn2();
console.log(str,num);