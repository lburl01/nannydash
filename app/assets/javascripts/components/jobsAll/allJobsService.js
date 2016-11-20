angular.module('app').service('allJobsAPI', ['$http', function($http) {
    return {
        jobsList: function() {
            return $http({
                url: '/api/v1/jobs',
                method: 'GET'
            });
        },
        jobDetails: function(id) {
          return $http({
            url: 'api/v1/job/' + id,
            method: 'GET'
          });
        }
    };
}]);
