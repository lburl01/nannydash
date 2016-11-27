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
            jobDetails: function(id) {
                return $http.get('/api/v1/job/' + id).then(function(response) {
                  console.log(response.data);
                    return response.data;

                }, function() {
                    alert('Failed');
                });
            },
            saveJob: function(id, data) {
              console.log(id, data);
              return $http.patch("/api/v1/job/" + id + ".json", {job: data});
            },
        };
    }]);
})();
