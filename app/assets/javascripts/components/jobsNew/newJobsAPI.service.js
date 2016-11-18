(function() {
  'use strict';
  angular.module('app').factory('newJobsAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/jobs/new").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      }

    };
  }]);
})();
