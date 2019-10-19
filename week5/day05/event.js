function on(ele,type,f){
    if(/^my/.test(type)){
        ele[type] = ele[type] ||[];
    }else{
        type = type.replace(/^on/,'');
        ele.addEventListener(type,f,false)
    }
}
function fire(ele,type){

}
function off(ele,type,f){

}