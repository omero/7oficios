'use strict';

angular
  .module('7oficiosApp', [])
  .factory('employeeFact', ['$http', function($http) {

    var urlBase = 'http://battlehackoficios-pocketlab.rhcloud.com/api/workers.json';
    var employeeFact = {};

    employeeFact.getEmployees = function(){
      console.log($http.get(urlBase));
      return $http.get(urlBase);
    };

    employeeFact.getEmployee = function(id){
      return $http.get(urlBase + '/' + id);
    };

    return employeeFact;

}]);
