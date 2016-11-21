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
      /*************************
      When user clicks on pending application, first sees if role is nanny/babysitter
      then takes user to more detailed application page
      *************************/
      this.pendingApplication = function(person) {
        if(person.role === "nanny") {
          dashboardAPI.pendingApps(person.application_id).success(function(response) {
            $state.go("pendingBabysitterInfo", {sitterId: response.id});
          });
        } else {
          dashboardAPI.pendingApps(person.application_id).success(function(response) {
            $state.go("pendingParentInfo", {parentId: response.id});
          });
        }
      }
      /*************************
      When user clicks on new/current jobs
      *************************/
      this.newJobs = function(job) {
        dashboardAPI.jobDetails(job.job_id).success(function(response) {
          $state.go("newJobInfo", {jobId: job.job_id});
        });
      }
      /*************************

      *************************/
      this.getDate = function(data) {
        var objectDate = data;
        var convertDate = new Date(objectDate);
        return newDate = convertDate.getMonth() + '/' + convertDate.getDate() + '/' + convertDate.getFullYear();
      }
      this.getDate()


  }]);
