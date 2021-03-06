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
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'employeeController'
      })
      .when('/employee/:nid', {
        templateUrl: 'views/employee-detail.html',
        controller: 'employeeDetailController'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl'
      })
      /*.when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })*/
      /*.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })*/
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
