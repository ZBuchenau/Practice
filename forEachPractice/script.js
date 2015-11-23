var arr1 = [1, 2, 3];

function average(x){
  var total = 0;
  x.forEach(function(currentVal, index, totalArray){
    total += currentVal;
  });
  return total/(x.length);
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));
