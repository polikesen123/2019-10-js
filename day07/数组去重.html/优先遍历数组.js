function unique4(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
        if(arr[i]===arr[j]){
          ++i;
        }
      }
        hash.push(arr[i]);
    }
    return hash;
  }
  // var arr=[2,8,5,0,5,2,6,7,2];
  let ary = [1,2,3,4,4,3,1,2,6];
  console.log(unique4(ary));