// var f = a=>b=>c=>a+b+c;
// f(1)(2)(3);
var f = a=>{
    return b=>{
        return c=>{
            return a+b+c;
        }
    }
}
f(1)(2)(3);