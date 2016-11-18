//  get endpoint and object to console log
// display key values as table data
// get 'api/v1/jobs' => 'jobs#index'

(function() {
    'use strict';
    angular.module('app')
        .controller('allJobsController', ['allJobsAPI', function(allJobsAPI) {
            var self = this;
            allJobsAPI.jobsList().success(function(response) {
                self.totalJobs = response;
            });
            this.name = function(firstName, lastName) {
                return firstName + " " + lastName;
            };
            this.time = function(startTime, endTime) {
                return startTime + " - " + endTime;
            };
            this.confirmed = function(confirmation) {
                if (confirmation === true) {
                    return "Yes";
                } else {
                    return "No";
                }
            };
        }]);

})();
