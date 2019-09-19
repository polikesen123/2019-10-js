
function unique1(arr){
  var ary=[];
  for (var i = 0; i < arr.length; i++) {
     if(ary.indexOf(arr[i])==-1){
      ary.push(arr[i]);
     }
  }
  return ary;
}
// var arr=[2,8,5,0,5,2,6,7,2];
let ary = [1,2,3,4,4,3,1,2,6];
console.log(unique1(ary));