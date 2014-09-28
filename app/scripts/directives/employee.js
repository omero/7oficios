'use strict';
var app = angular.module('7oficiosApp', []);

app.directive('employee', function() {
    return {
      restrict: 'E',
      scope: {
        employeeInfo: '=ID'
      },
      templateUrl: 'partials/employee.html'
    };
});
