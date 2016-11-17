angular.module('app').service('allJobsAPI', ['$http', function($http) {
    return {
        jobsList: function() {
            return $http({
                url: '/api/v1/jobs',
                method: 'GET'
            });
        }
    };
}]);
