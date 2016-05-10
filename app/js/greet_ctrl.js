const angular = require("angular");

const sweetApp = angular.module("sweetApp", []);

sweetApp.controller("GreetCtrl", ["$scope", function ($scope) {
  $scope.greeting = "Super Awesome App";

  $scope.greetDel = function () {
    $scope.greeting = "";
  };
}]);
