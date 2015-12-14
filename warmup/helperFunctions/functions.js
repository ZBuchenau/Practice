var string = "The Denver Broncos Rule";
var word = 'thorough';
var p = word.split('');


function typoglycemia(param){
  var array = [];
  var stringBreak = param.split(' ');
  // console.log(stringBreak);
  for(var i = 0; i < stringBreak.length; i++){
    console.log(stringBreak[i]);
    array.push(randomize(stringBreak[i]));
  }
  var redesign = array.join();
}
typoglycemia(string);



//-------------------------------------------------
// * BREAK APART ARRAY, SHUFFLE THE MIDDLE CONTENTS
// RE-JOIN THE ARRAY BACK INTO A STRING *
//
function randomize(param2){
  //declare an empty array
  array1 = [];
  //split the word into an array of letters
  var paramSplit = param2.toString().split('');
  //push the first letter of the split word into array1
  array1.push(paramSplit[0]);
  //push the last letter of the split word into array1
  array1.push(paramSplit[paramSplit.length - 1]);
  //pull out the mid section of the split up word
  var p1 = paramSplit.slice(1, (paramSplit.length - 1));
  // console.log(p1);
  //shuffle the mid-section of the word
  var shuffled = shuffle(p1);
  //re-insert the shuffled array into the original word
  for(var i in shuffled){
  array1.splice((array1.length - 1),0, shuffled[i]);
  }

  var redone = array1.join('');
  // console.log(redone);
  return redone.toString('');
}
// randomize(word);


//--------------------------------------------------
// * SHUFFLE ARRAY *
function shuffle(array) {
var m = array.length, t, i;
// While there remain elements to shuffle…
while (m) {
  // Pick a remaining element…
  i = Math.floor(Math.random() * m--);
  // And swap it with the current element.
  t = array[m];
  array[m] = array[i];
  array[i] = t;
}
return array;
}
// var shuffle = Math.floor( Math.random() * ( i + 1 ));
