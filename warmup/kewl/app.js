//*****INTERPRETER*****

//read the file that we want to interpret
//parse the file into a useable format
//separate each line as a separate piece of code
//break each line into separate characters
//with each line, watch for commands and arguments
//do whatever the commands are

'use strict'

var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var line = data.split('\n');
  line.pop(); //pops the last newLine character off the array

  line.forEach(function(line, lineIndex) {

    var command = '';
    var blob = '';
    var arguments = [];

    var inArgument = false;
    var inString = false;
    var inCommand = true;

    for (var i = 0; i < line.length; i++) {
      blob += line.charAt(i);
      if (inCommand && line.charAt(i) === ' ') {
        inCommand = false;
        inArgument = true;
        command = blob;
        blob = [];
      }

      if(inCommand && line.charAt(i) === "'"){
        inString = true;
      }
      if(!inString && line.charAt(i) === "'"){
        inString = false;
      }
    }
  });
});
