(function() {
  'use strict';
  angular.module('app').factory('appAPI', ['$http', '$state', '$location', function($http, $state, $location){

    return {
      totalCount: function() {
        return $http.get("/api/v1/agency/count_totals").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      }
    };
  }]);
})();
