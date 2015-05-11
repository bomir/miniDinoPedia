// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dinoApp', ['ionic', 'dinoApp.controllers', 'dinoApp.services'])


.run(function(DB) {
    DB.init();
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.dinosaurs', {
    url: "/dinosaurs",
    views: {
      'menuContent': {
        templateUrl: "templates/dinosaurs.html",
		 controller: 'DinosaursCtrl'
      }
    }
  })
  
  .state('app.dinosaur', {
    url: "/dinosaurs/:dinosaurId",
    views: {
      'menuContent': {
        templateUrl: "templates/dinosaur.html",
        controller: 'DinosaurCtrl'
      }
    }
  })

  .state('app.play', {
    url: "/play",
    views: {
      'menuContent': {
        templateUrl: "templates/play.html",
        controller: 'PlayCtrl'
      }
    }
  })
  
  .state('app.playera', {
    url: "/playera",
    views: {
      'menuContent': {
        templateUrl: "templates/playera.html",
        controller: 'PlayeraCtrl'
      }
    }
  })
  ;
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dinosaurs');
});
