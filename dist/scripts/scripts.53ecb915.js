"use strict";angular.module("siteAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","720kb.tooltips"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl",controllerAs:"portfolio"}).when("/github",{templateUrl:"views/github.html",controller:"GithubCtrl",controllerAs:"github"}).when("/youtube",{templateUrl:"views/youtube.html",controller:"YoutubeCtrl",controllerAs:"youtube"}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(a){a.$on("$routeChangeSuccess",function(b,c,d){a.title="RouteDigit.com"})}]),angular.module("siteAppApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("siteAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("siteAppApp").controller("PortfolioCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("siteAppApp").controller("GithubCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("siteAppApp").controller("YoutubeCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("siteAppApp").run(["$templateCache",function(a){a.put("views/about.html","<h1>This is my About view.</h1>"),a.put("views/github.html","<h1>This is my Github view.</h1>"),a.put("views/main.html",'<div class="container"> <div class="col-md-6"> <h1>Bart Krystman</h1> <h1>Web Developer</h1> <h1>Denver, CO</h1> </div> <div class="col-md-6"> <div class="photo"></div> </div> </div>'),a.put("views/portfolio.html",'<div class="container"> <div class="row rectangle container"> <h3>Musique-App</h3> <div class="col-md-6"> <img src="../images/app01.22e96f6d.png" width="100%" height="100%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> Spotify Music Search App has three search modes. Search by top tracks, albums and by related artists. All information is comming back from Spotify\'s api. You are only able to listen to track if you search for the top tracks. If you search in different mode our app will point you to spotify to enjoy service provided by spotify one hundred percent. </p> <p class="">Technologies Used: HTML, CSS, JavaScript, Ajax, Firebase, Spotify Api</p> <span> <a href="https://musique-app.firebaseapp.com/" tooltips tooltip-template="Site" tooltip-side="bottom"><i class="fa fa-globe spaceIcon" style="font-size:28px"></i></a> <a href="https://github.com/rootgateway/Musique-App" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span> </div> </div>  <div class="row rectangle container"> <h3>Hip Food Trucks App</h3> <div class="col-md-6"> <img src="../images/app02.dd8e7831.png" width="100%" height="100%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> A wonderful app that let\'s food truck owners set up an account and have their food trucks displayed on google map for users within some distance to that very food trcuk. Users and owners are able to create an account. Default user username is "hipster" and password is "password". </p> <p class="">Technologies Used: HTML, CSS, JavaScript, Ajax, Heroku, Google Maps Api, Postgresql, Knex, PassportJS, ExpressJS</p> <span> <a href="https://hipfoodtrucks.herokuapp.com/" tooltips tooltip-template="Site" tooltip-side="bottom"><i class="fa fa-globe spaceIcon" style="font-size:28px"></i></a> <a href="https://github.com/rootgateway/foodtrucks" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span> </div> </div>  <div class="row rectangle container"> <h3>Eatery iOS App</h3> <div class="col-md-6"> <img src="../images/app03.cdda83ef.png" width="60%" height="60%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> An iOS app that lets us choose our meals based on diatery needs. If we are vegan, we will be able to display all vegan foods and then get a map of all vegan restaurants close to our location. </p> <p class="">Technologies Used: MongoDB with ExpressJS for an API, Swift 3, Xcode 8</p> <span> <a href="https://github.com/rootgateway/meal_finder" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="https://youtu.be/WcXuSTt4eUQ" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span>  </div> </div>  <div class="row rectangle container"> <h3>Weather iOS App</h3> <div class="col-md-6"> <img src="" width="100%" height="100%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> Description </p> <p class="">Technologies Used: HTML, CSS, JavaScript, Ajax</p> <span> <a href="https://github.com/rootgateway/bk_weather_ios_app" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span> </div> </div>  <div class="row rectangle container"> <h3>Shopping Cart App</h3> <div class="col-md-6"> <img src="../images/app05.10944eca.png" width="100%" height="100%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> Description </p> <p class="">Technologies Used: HTML, CSS, JavaScript, AngularJS</p> <span> <a href="" tooltips tooltip-template="Site" tooltip-side="bottom"><i class="fa fa-globe spaceIcon" style="font-size:28px"></i></a> <a href="https://github.com/rootgateway/bk_shopping_cart_app" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span> </div> </div>  <div class="row rectangle container"> <h3>Movie Search App</h3> <div class="col-md-6"> <img src="" width="100%" height="100%" class="picRad"> </div> <div class="col-md-6 iconSpace"> <p> Description </p> <p class="">Technologies Used: HTML, CSS, JavaScript, AngularJS</p> <span> <a href="https://hipfoodtrucks.herokuapp.com/" tooltips tooltip-template="Site" tooltip-side="bottom"><i class="fa fa-globe spaceIcon" style="font-size:28px"></i></a> <a href="https://github.com/rootgateway/foodtrucks" tooltips tooltip-template="Github" tooltip-side="bottom"><i class="fa fa-github spaceIcon" style="font-size:28px"></i></a> <a href="" tooltips tooltip-template="Youtube" tooltip-side="bottom"><i class="fa fa-youtube spaceIcon" style="font-size:28px"></i></a> </span> </div> </div> </div>'),a.put("views/youtube.html","<h1>This is my Youtube view.</h1>")}]);