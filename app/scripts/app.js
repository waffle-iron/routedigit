'use strict';

/**
 * @ngdoc overview
 * @name siteAppApp
 * @description
 * # siteAppApp
 *
 * Main module of the application.
 */
angular
  .module('siteAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    '720kb.tooltips'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/github', {
        templateUrl: 'views/github.html',
        controller: 'GithubCtrl',
        controllerAs: 'github'
      })
      .when('/youtube', {
        templateUrl: 'views/youtube.html',
        controller: 'YoutubeCtrl',
        controllerAs: 'youtube'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = "RouteDigit.com";
    });
  }]);
