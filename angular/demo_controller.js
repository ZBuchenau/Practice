angular.module("demoApp").controller('DemoController', ['$scope', demoController]);



  function demoController($scope){
    // $scope.test = 'hello world!';

    // SETTING SCOPE EQUAL TO vm. This is best practice, so that you can organize things.
    var vm = this;
    //CALLING ON THE SCOPE, WHICH WE GAVE A VARIABLE NAME OF VM.
    // THIS IS SO THAT WE CAN REFER TO DIFFERENT SCOPES WITHIN THE SAME APPLICATION.
    vm.test = 'hello angular';
  }
