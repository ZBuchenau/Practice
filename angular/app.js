var app = angular.module("firstApp", []);

app.controller("MyFirstController", ['$scope', function($scope) {
  $scope.name = "Severus Snape";
}]);
