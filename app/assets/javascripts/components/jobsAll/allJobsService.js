(function() {
    'use strict';
    angular.module('app').factory('allJobsAPI', ['$http', function($http) {
        return {
            jobsList: function() {
                return $http({
                    url: '/api/v1/jobs',
                    method: 'GET'
                });
            },
            allJobs: function() {
              return $http({
                url: "/family_dash/all_family_jobs",
                method: "GET"
              });
            },
            jobDetails: function(id) {
                return $http.get('/api/v1/job/' + id).then(function(response) {
                    return response.data;

                }, function() {
                    alert('Failed');
                });
            },
            saveJob: function(id, data) {
              return $http.patch("/api/v1/job.json", {id: id, job: data});
            },
            deleteJob: function(id) {
              return $http.patch("api/v1/job/delete.json", {id: id});
            }
        };
    }]);
})();
