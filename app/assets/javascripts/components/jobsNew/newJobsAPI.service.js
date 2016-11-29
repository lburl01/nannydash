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
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      deleteJob: function(id) {
        return $http.patch("/api/v1/job/delete/" + id + ".json", {id: id});
      },

      activeUsers: function() {
        return $http.get('/users/all_active.json').then(function(response) {
          return response.data;
        }, function() {
          console.log('Failed to get active users');
        });
      },

      assignSitter: function(data) {
        return $http.patch('/api/v1/job/agency_assign/' + data.id + '.json', {id: data.jobId, sitter_id: data.sitterId}).then(function(response) {
          console.log('sitter was assigned successfully');
        }, function() {
          console.log('Sitter was not assigned.');
        });
      }

    };
  }]);
})();
