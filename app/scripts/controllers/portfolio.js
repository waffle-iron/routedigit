'use strict';

/**
 * @ngdoc function
 * @name siteAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siteAppApp
 */
angular.module('siteAppApp')
  .controller('PortfolioCtrl', function ($scope,$http) {
    $http.get('./list.json').then(function(data){
      var obj = data.data;
      console.log(obj.length);
      $scope.datas = obj;
    })
  });
