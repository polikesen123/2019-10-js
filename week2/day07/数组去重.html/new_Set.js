function unique5(arr){
    var x = new Set(arr);
    // console.log(x.size);
   return [...x];
  }
  var arr=[2,8,5,0,5,2,6,7,2];
  console.log(unique5(arr));
  