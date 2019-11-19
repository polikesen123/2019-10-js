function unique2(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i])==i){
        hash.push(arr[i]);
       }
    }
    return hash;
  }
  var arr=[2,8,5,0,5,2,6,7,2];
  console.log(unique2(arr));