var myApp = angular.module('myApp',[]);
myApp.controller('AppCTRL',['$scope','$http',
  function($scope,$http){
    $scope.txtskill = "Skills:"
    $scope.nav_text = [{
          name:'Main',
          url:'#/main'
        },{
        name:'About',
        url:'#/about'
      },{
        name:'Portfolio',
        url:'#/portfolio'
      },{
        name:'GitHub',
        url:'#/github'
      },{
        name:'Contact',
        url:'#/contact'
      },{
        name:'Login',
        url:'#/login'
      }
    ];
    $scope.techskills = [{
        skill: 'HTML',
      },{
        skill: 'CSS'
      },{
        skill: 'JavaScript'
      },{
        skill: 'Express'
      },{
        skill: 'KnexJS'
      },{
        skill: 'React'
      },{
        skill: 'AngularJS'
      },{
        skill: 'Passport'
      },{
        skill: 'Node.js'
      },{
        skill: 'Mocha/Chai'
      },{
        skill: 'Swift 3'
      },{
        skill: 'Xcode 8'
      },{
        skill: 'OOP'
      },{
        skill: 'Responsive Design'
      },{
        skill: 'Bootstrap'
      },{
        skill: 'PostgreSQL'
      },{
        skill: 'Git'
      },{
        skill: 'GitHub'
      },{
        skill: 'Linux Ubuntu Server'
      },{
        skill: 'Heroku'
      },{
        skill: 'Pivotal Tracker'
      },{
        skill: 'Agile'
      },{
        skill: 'Waffle.io'
      }]



  }
]);


/*
[
];
*/
