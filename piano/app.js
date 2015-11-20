var cKey = document.getElementById('c');
console.log(cKey)
var cSharp = document.getElementById('cSh');
console.log(cSharp)
var dKey = document.getElementById('d');
console.log(dKey)
var dSharp = document.getElementById('dSh');
console.log(dSharp)
var eKey = document.getElementById('e');
console.log(eKey)
var fKey = document.getElementById('f');
console.log(fKey)
var fSharp = document.getElementById('fSh');
console.log(fSharp)
var gKey = document.getElementById('g');
console.log(gKey)
var gSharp = document.getElementById('gSh');
console.log(gSharp)
var aKey = document.getElementById('a');
console.log(aKey)
var aSharp = document.getElementById('aSh');
console.log(aSharp)
var bKey = document.getElementById('b');
console.log(bKey)
var keys = document.querySelector('.keys');
var piano = Synth.createInstrument('piano');

keys.addEventListener('click', function(){
  if(cKey === event.target){piano.play('C', 4, 2)}
  else if(cSharp === event.target){piano.play('C#', 4, 2)}
  else if(dKey === event.target){piano.play('D', 4, 2)}
  else if(dSharp === event.target){piano.play('D#', 4, 2)}
  else if(eKey === event.target){piano.play('E', 4, 2)}
  else if(fKey === event.target){piano.play('F', 4, 2)}
  else if(fSharp === event.target){piano.play('F#', 4, 2)}
  else if(gKey === event.target){piano.play('G', 4, 2)}
  else if(gSharp === event.target){piano.play('G#', 4, 2)}
  else if(aKey === event.target){piano.play('A', 4, 2)}
  else if(aSharp === event.target){piano.play('A#', 4, 2)}
  else if(bKey === event.target){piano.play('B', 4, 2)}
})
