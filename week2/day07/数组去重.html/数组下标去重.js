function unique22(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
        hash.push(arr[i]);
       }
    }
    return hash;
  }
  //只要有重复的，连同它自己都清了。
  var arr=[2,8,5,0,5,2,6,7,2];
  console.log(unique22(arr));