const angular = require("angular");

const sweetApp = angular.module("sweetApp", []);

sweetApp.controller("GreetCtrl", ["$scope", function ($scope) {
  $scope.greeting = "Howdy!";

  $scope.greetDel = function () {
    $scope.greeting = "";
  };
}]);
