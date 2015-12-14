'use strict'

var fs = require('fs');

//read file that I want to process
//loop over each line of code and push each line into an array as a new index.
//loop over the lineArray and parse the code to figure out what command to run.
//return the proper output.
fs.readFile('sample.kewl', function(err,data){
  if (err) {
    throw err;
  }
  else{
    var newData = data.toString().split('\n');
    var parsed = parse(newData);
    console.log(parsed);
    return newData;
  }
});



var parse = function(param){
    var split1 = param.split('(');
    console.log(split1);
};

// var string = 'Today is monday';
//
// var print = function(param){
//   var array = [];
//   var paramSplit = param.split(' ');
//   for(var i in paramSplit){
//     var array2 = array.push(paramSplit[i]);
//     array2.join();
//     console.log(array2);
//   }
// };
// print('string');
