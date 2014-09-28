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
      .when('/top-employee', {
        templateUrl: 'views/top-employee.html',
        controller: 'TopEmployeeCtrl'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
