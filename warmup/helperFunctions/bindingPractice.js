// var object1 = {
//   foo: 'a',
//   bar: '1'
// };
//
// var object2 = {
//   foo: 'b',
//   bar:'2'
// };
//
// function fooBar(){
//   console.log(this.foo+this.bar);
// }
//
// function FooBar(foo, bar){
//   this.foo = foo;
//   thid.bar = bar;
//   this.output = fooBar;
// }
//
// object1.output = fooBar;
// object2.output = fooBar;
//
// object1.output();
// fooBar();
// object2.output();
// object1.output.call(object2);
// object3.output();

//*******************************************************

var Car = function(model, make){
    this.model = model;
    this.make = make;
    this.fillTank = function(){

    };
};

var myCar = new Car('Volkswagon', 'Jetta');

Car.prototype.drive = function(){
  return 'the car is driving';
};

console.log(myCar);
//Check to see if myCar is an instance of Car...
//instanceof returns a boolean value
console.log(myCar instanceof Car);
console.log(myCar.drive());



























//
