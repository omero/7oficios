'use strict';

/**
 * @ngdoc overview
 * @name 7oficiosApp
 * @description
 * # 7oficiosApp
 *
 * Main module of the application.
 */
angular
  .module('7oficiosApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
