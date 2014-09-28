'use strict';

/**
 * @ngdoc function
 * @name 7oficiosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the 7oficiosApp
 */
angular.module('7oficiosApp')
  .controller('LoginCtrl', function ($scope, $http) {
    var data = {
      "username" : "gecko",
      "password" : "gecko",
    };
    $scope.submitForm = function() {
      $http({
        method: 'POST',
        url: 'http://battlehackoficios-pocketlab.rhcloud.com/api/user/login',
        data : data,
        withCredentials: true,
        headers: {'Content-Type': 'application/json'},
      }).success(function(response) {
          alert('dsajdisajidosa');
      });
    };
  });
