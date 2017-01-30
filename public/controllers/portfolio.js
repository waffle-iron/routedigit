'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the myApp
 */

angular.module('myApp')
  .controller('PortfolioCtrl', function ($scope,$http) {
    console.log('Hello World');
    $scope.effect = 'animated slideInUp'
    $http.get('./list.json').then((data)=>{
      var obj = data.data;
      console.log(obj.data);
      $scope.datas = obj;
      $scope.pageTitle = "My Portfolio";
    })
  });
