var app = angular.module("percApp", []);
app.controller("percCtrl", function ($scope) {
  var perc = $scope.cash
  $scope.percent = function () {
    return Math.round(10000 - ($scope.cash * 10000 / $scope.credit)) / 100;
  }
})