var Car = function(){
  return {
    make: 'Volkswagon',
    model: 'Jetta',
    getType: function(){
      return this.make + ' ' + this.model;
    }
  };
};

var otherObject = {
  data:[],
  make: 'Epson',
  model: '1234',
  getType: Car.getType
};

Car().getType();
otherObject.getType();

setTimeout(otherObject.getType, 100);

var thirdMachine = {
  make: 'Osterizer',
  model: '1234'
};

var wrapper = function() {
  otherObject.getType.apply(thirdMachine);
};

// console.log(Car.getType());

// Explicit Binding
// New Binding is within a constructor


var myCar = new Thing();
console.log(myCar.make);

// 4 rules to define this
// order of priority
// new binding, explicit binding, implicit binding, normal binding(global scope)
