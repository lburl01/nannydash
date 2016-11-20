angular.module('app')
    .controller('dashboardController', ["dashboardAPI", "$http", "$state", "$stateParams", function (dashboardAPI, $http, $state, $stateParams) {
      /*************************
      Variables
      *************************/
      var self = this;
      /*************************
      Loading in dashboard endpoints
      *************************/
      dashboardAPI.list().success(function(response) {
        self.application = response.applications
        self.assignments = response.assignments
        self.messages = response.messages;
        self.openJobs = response.open_jobs;
      }, function(response) {
        alert('Failed');
      });

      this.changeStates = function(page) {
        $state.go(page);
      }

      this.userClick = function(id) {

      }


  }]);
