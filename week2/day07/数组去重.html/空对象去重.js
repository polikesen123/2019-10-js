function unique(ary) {
    let obj = {};
    for (let i = 0; i < ary.length; i++) {
        let item = ary[i]
        obj[item] = null;
    }
    ary = [];
    for(key in obj){
        ary.push(Number(key));
    }
    return ary;
}
// let arr = [1, 2, 3, 4, 4, 3, 1, 2, 6];
var arr=[2,8,5,0,5,2,6,7,2];
console.log(unique(arr));
