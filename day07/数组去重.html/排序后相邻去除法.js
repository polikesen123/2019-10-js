function unique3(arr){
    arr.sort();
    var hash=[arr[0]];
    for (var i = 1; i < arr.length; i++) {
       if(arr[i]!=hash[hash.length-1]){
        hash.push(arr[i]);
       }
    }
    return hash;
  }
  var arr=[2,8,5,0,5,2,6,7,2];
  console.log(unique3(arr));