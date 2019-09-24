function fn(){
    console.log(arguments,this)
}
var obj = {
    a:2,
    b:3
}
function myCall(context=window,...arg){
    var a = Symbol();
    context[a] = this;
    var res = context[a](...arg);
    delete context[a];
    return res;
}
fn.myCall(obj,2,3,4);
