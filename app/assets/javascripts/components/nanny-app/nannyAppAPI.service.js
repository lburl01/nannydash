(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("api/v1/jobs/new").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert("Failed to get all available jobs");
        });
      },
      info: function(id) {
        return $http.get('api/v1/job/' + id + '.json').then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert("Failed to that specific job");
        });
      },
      toggleAssign: function(id) {
        return $http.patch('api/v1/job/assign/' + id + '.json').then(function(response) {
          console.log('patch successful');
          return response.data;
        }, function() {
          console.log("Assignment was unsuccessful");
        });
      }

    };
  }]);
})();
