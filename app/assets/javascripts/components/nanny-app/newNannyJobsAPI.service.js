(function() {
  'use strict';
  angular.module('nannyApp').factory('newNannyJobsAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/jobs/new.json").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      }

    };
  }]);
})();
