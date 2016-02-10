// function parseQueryString(param){
//
//   console.log(param);
//   var int = param.split('?');
//   console.log(int);
//   for(var i = 0; i < int.length; i++){
//     if(i === 1){
//
//     }
//   }
//
//
//
//
//   // for (var i=0; i < int.length; i ++){
//   //   if(i === 1){
//   //   }
//   // }
//
// }
//
// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week");
// var array1 = [1, 1, 1, 2, 3, 4];
// var arraySorter = function(arrayInitial){
//   var array3 = [];
//   var array2 = arrayInitial.sort();
//   for(var i = 0; i < array2.length; i++){
//     if(array2[i] != array2[i-1]){
//       array3.push(array2[i]);
//     }
//   }
//   return array3;
//
// };
// arraySorter(array1);


// var arraySumFinder = function(array, sumNum) {
//   var newArray = arraySorter(array);
//   var multiples = [];
//   for (var i = 0; i < newArray.length; i++) {
//     var num = newArray[i];
//     for (var j = 0; j < newArray.length; j++) {
//       if (newArray[j] + num === sumNum) {
//         multiples.push(newArray[j] + " + " + num);
//         console.log(newArray[j] + " + " + num + " = " + sumNum);
//       }
//     }
//   }
// };
//
// arraySumFinder(array1, 4);



function allNums(topEnd) {
  for (var i = 3;i <= topEnd; i++) {
    var num = factorialSum(i);
    if (num === i && num != 145) {
      console.log(i);
    }
  }
}
allNums(1000000);



function factorialSum(num) {
  var array = [];
  var numArray = num.toString().split("");
  for (var i = 0; i < numArray.length; i++) {
    numInt = parseInt(numArray[i], 10);
    var facSum = findFactorialSum(1, numInt).reduce(function(a, b) {
      return a + b;
    });
    array.push(facSum);

  }
  return array.reduce(function(a, b) {
    return a + b;
  });
}
console.log(factorialSum(145));



function findFactorialSum(start, end) {
  var multiples = [];
  var numbers = [];
  for (; start <= end; start++) {
    numbers.push(start);
  }
  // console.log(numbers);
  multiples.push(numbers.reduce(function(a, b) {
    return a * b;
  }));
  //console.log(multiples);
  return multiples;
}

// generateNumbers(1, 5);









//
