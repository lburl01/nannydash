//  get endpoint and object to console log
// display key values as table data
// get 'api/v1/jobs' => 'jobs#index'

(function() {
    'use strict';
    angular.module('app')
        .controller('allJobsController', ['allJobsAPI', function(allJobsAPI) {
allJobsAPI.jobsList().success(function(response){
  console.log(response);
});

        }]);

})();
