(function() {
  'use strict';
  angular.module('app').factory('newJobsAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/jobs/new").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      jobInfo: function(id) {
        return $http.get("/api/v1/job/" + id + ".json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      saveJob: function(id, data) {
        return $http.patch("/api/v1/job/" + id + ".json", {job: data});
      },

      deleteJob: function(id) {
        return $http.patch("/api/v1/job/delete/" + id + ".json");
      }

    };
  }]);
})();
