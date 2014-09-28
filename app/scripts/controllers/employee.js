'use strict';

angular.module('7oficiosApp')
.controller('employeeController', function ($scope, $http) {
  $http.get('http://battlehackoficios-pocketlab.rhcloud.com/api/workers').
  success(function(data){
    $scope.emps = data;
  });
})
.controller('employeeDetailController', function ($scope, $http, $routeParams) {
  var uriUser = 'http://battlehackoficios-pocketlab.rhcloud.com/api/workers.json?nid='+$routeParams.nid;
  $http.get(uriUser).
  success(function(data){
    $scope.user = data[0];
  });
});


/*angular
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
*/
