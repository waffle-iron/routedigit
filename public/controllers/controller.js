var myApp = angular.module('myApp',['ngRoute','720kb.tooltips']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'AppCTRL'
        })
        .when('/portfolio', {
            templateUrl : 'views/portfolio.html',
            controller  : 'PortfolioCtrl'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutCTRL'
        })
        .when('/github', {
            templateUrl : 'views/github.html',
            controller  : 'githubCTRL'
        })
        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'loginCTRL'
        })
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactCTRL'
        })
});
