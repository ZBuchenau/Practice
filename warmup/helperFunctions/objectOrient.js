var tableSaw = {
  bladeType: 'standard',
  powerSwitch: 'on',
  turnOn: function(toBeCut){
    if(toBeCut === 'finger'){
      return "You are going to have a hard time typing now.";
    } else if (this.powerSwitch === 'off'){
      return "The Table Saw is turned off.";
    } else if(this.powerSwitch === 'on' && this.bladeType === "dado"){
      return "The Table Saw is running with a dado blade, and is ready to cut the " + toBeCut + "board.";
    } else if(this.powerSwitch === 'on' && this.bladeType === "standard"){
      return "The Table Saw is running, and ready to cut the " + toBeCut + " board.";
    }
    }
};

tableSaw.bladeType = 'dado';
console.log(tableSaw.turnOn('maple'));
