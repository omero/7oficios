'use strict';

angular
  .module('7OficiosApp', [])
  .controller('employeeController',
      ['$scope', 'employeeFact',
      function($scope, employeeFact){
        $scope.employees = function(){
          employeeFact.getEmployees()
                    .success(function (emps) {
                      $scope.emps = emps;
                    })
                    .error(function (error) {
                      $scope.status = 'No se pueden cargar los empleados: ' + error.message;
                    });
          return $scope.emps;
        };

}]);
