'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */

angular.module('myApp')
  .controller('AppCTRL', function ($scope,$http) {

    $scope.txtskill = "SKILLS :"
    $scope.cir1 = false;
    $scope.cir2 = true;
    $scope.cir3 = true;
    $scope.cir4 = false;
    $scope.lowerBodyHide = false;



    $http.get('../data/navText.json').then((obj)=>{
      $scope.nav_text = obj.data;
    })

    $http.get('../data/techskills.json').then((obj)=>{
      console.log(obj.data)
      $scope.techskills = obj.data;
    })

    $scope.setRed = function(){
      console.log('Blue');
    }

    $scope.setActive = function() {
      var Active = angular.element( document.querySelector( '.nav-links-active' ) );
      Active.css('color','red');
      Active.css('font-size', '22px');
      Active.css('margin-left', '20px');
      Active.css('font-family', 'KTF-Roadstar');
    }
    //cir1 selected = false

    $scope.circle1 = function(){

      if($scope.cir1==false){
        console.log("cir1 is true now")
        $scope.cir1 = true;
        $scope.cir2 = false;
        $scope.lowerBodyHide=true;
        $scope.cir3 = false;
        $scope.cir4 = true;
      }
      else {
        console.log("cir1 is false now")
        $scope.cir1 = false;
        $scope.cir2 = true;
        $scope.lowerBodyHide=false;
        $scope.cir3 = true;
        $scope.cir4 = false;
      }
    }
    $scope.circle2 = function(){

      if($scope.cir1==false){
        console.log("cir3 is true now")
        $scope.lowerBodyHide=true;
        $scope.cir1 = true;
        $scope.cir2 = false;
        $scope.cir3 = false;
        $scope.cir4 = true;
      } else {
        console.log("cir3 is true false")
        $scope.cir1 = false;
        $scope.cir2 = true;
        $scope.cir3 = true;
        $scope.cir4 = false;
      }
    }
  });
