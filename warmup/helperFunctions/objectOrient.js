// // var tableSaw = {
// //   bladeType: 'standard',
// //   powerSwitch: 'on',
// //   turnOn: function(toBeCut){
// //     if(toBeCut === 'finger'){
// //       return "What happened to your thumb?";
// //     } else if (this.powerSwitch === 'off'){
// //       return "The Table Saw is turned off.";
// //     } else if(this.powerSwitch === 'on' && this.bladeType === "dado"){
// //       return "The Table Saw is running with a dado blade, and is ready to cut the " + toBeCut + "board.";
// //     } else if(this.powerSwitch === 'on' && this.bladeType === "standard"){
// //       return "The Table Saw is running, and ready to cut the " + toBeCut + " board.";
// //     }
// //   }
// // };
//
// //---------------------------------------------
//
// var PowerSaws = function() {
//   return {
//     pluggedIn: true,
//     turnedOn: true
//   };
// };
//
// var TableSaw = function() {
//   var tableSaw = PowerSaws();
//   tableSaw.feedRate = 25;
//   tableSaw.cut = function(toBeCut) {
//     if (this.pluggedIn === true && this.turnedOn === true) {
//       return 'Your TableSaw will cut ' + toBeCut + ' at ' + this.feedRate + 'feet/minute.';
//     } else {
//       return 'Your table saw will not run if it is not plugged in or turned on!';
//     }
//   };
//   return tableSaw;
// };
//
// var BandSaw = function() {
//   var bandSaw = PowerSaws();
//   bandSaw.feedRate = 12;
//   bandSaw.cut = function(toBeCut) {
//     if (this.pluggedIn === true && this.turnedOn === true) {
//       return 'Your TableSaw will cut ' + toBeCut + ' at ' + this.feedRate + 'feet/minute.';
//     } else {
//       return 'Your band saw will not run if it is not plugged in or turned on!';
//     }
//   };
//   return bandSaw;
// };
//
// var myTableSaw = TableSaw();
// var myBandSaw = BandSaw();
// myTableSaw.turnedOn = false;
// myBandSaw.pluggedIn = false;
// console.log(myTableSaw.cut('wood'));
// console.log(myBandSaw.cut('wood'));

// ----------------------------------------------

var Vector2 = function(x, y){

  return {
    x: this.x = x,
    y : this.y = y,
    subtract: function(otherVector){
      var answerX = this.x - otherVector.x;
      var answerY = this.y - otherVector.y;
      return new Vector2(answerX, answerY);
    },
    add: function(otherVector){
      var answerX = this.x + otherVector.x;
      var answerY = this.y + otherVector.y;
      return new Vector2(answerX, answerY);
    }
  };
};

var myVector = new Vector2(1,3);
var myVector2 = new Vector2(6,2);
var subtract1 = myVector.subtract(myVector2);
var subtract2 = myVector2.subtract(myVector);
var add = myVector2.add(myVector);
console.log(subtract1.x);
console.log(subtract2.x);
console.log(add.x);
console.log(add.y);
