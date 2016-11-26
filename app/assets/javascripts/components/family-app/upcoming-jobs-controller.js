angular.module('familyApp')
    .controller('upcomingJobsController', ["familyAppAPI", "$http", function (familyAppAPI, $http) {
      /*************************
      Variables
      *************************/
      var self = this;

      familyAppAPI.pendingJobs().success(function(response) {
        console.log(response);
      });

  }]);
