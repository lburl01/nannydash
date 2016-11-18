angular.module('app')
    .controller('dashboardController', ["dashboardAPI", "$http", "$state", "$stateParams", function (dashboardAPI, $http, $state, $stateParams) {
      /*************************
      Variables
      *************************/
      var self = this;

      dashboardAPI.list().success(function(response) {
        console.log(response);
        self.application = response.applications
        self.assignments = response.assignments
        self.messages = response.messages;
        self.openJobs = response.open_jobs;


      }, function(response) {
        alert('Failed');
      });


  }]);
