angular.module("translator", [])
.controller("trnsController",function($http, $scope){
    var app = this;
    app.sendToAPI = function(input){
      console.log(input);
      //API CALL to Yandex
      //$http.get()
      $scope.output = input
    }

});
