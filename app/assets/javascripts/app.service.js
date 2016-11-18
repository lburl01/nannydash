(function() {
  'use strict';
  angular.module('app').factory('appAPI', ['$http', function($http){
    return {

      totalCount: function() {
        return $http.get("api/v1/agency/count_totals").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      }

    };
  }]);
})();
