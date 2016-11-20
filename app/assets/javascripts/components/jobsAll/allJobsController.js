(function() {
    'use strict';
    angular.module('app')
        .controller('allJobsController', ['$state', 'allJobsAPI', function( $state, allJobsAPI ) {
            var self = this;
            allJobsAPI.jobsList().success(function(response) {
                self.totalJobs = response;
                console.log(response);
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
        /*************************
        When user clicks on <tr>, they go to the the unique job details page
        *************************/
        this.jobClicked = function(jobId) {
          allJobsAPI.jobDetails(jobId).success(function(response) {
            $state.go('jobs-list-details', {babysitterParam: {sitter: response}, sitterId: jobId}, {reload: true});
          });
        };
})();
