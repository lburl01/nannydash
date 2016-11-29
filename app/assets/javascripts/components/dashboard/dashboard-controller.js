angular.module('app')
    .controller('dashboardController', ["dashboardAPI", "$http", "$state", "$stateParams", "newJobsAPI", function (dashboardAPI, $http, $state, $stateParams, newJobsAPI) {
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
        console.log(response.open_jobs);
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
      Checking if message was read
      *************************/
      this.readValidate = function(value) {
        console.log();
        if(value === true) {
          console.log('true');
          return 'Yes';
        } else if(value === false) {
          return 'No';
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
      When user clicks on message
      *************************/
      this.message = function(conversationId, messageId) {
        dashboardAPI.message(conversationId, messageId).success(function(response) {
          console.log(response);
        });
      }
      /*************************
      Reformating Date
      *************************/
      this.getDate = function(data, person) {
        var myMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
        var date = new Date(data);
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ampm;

        self.colorChange(date.getFullYear() + '-' + (month + 1) + '-' + (date.getDate() + 1), person);

        for(var i = 0; i <= myMonth.length; i++) {
          if(myMonth[i] === myMonth[month]) {
            return myMonth[month] + ' ' + day + ' at ' + strTime;
          }
        }
      }

      this.colorChange = function(date, person) {
        var now = new Date();
        var jobDate = new Date(date);

        if(now.toDateString() === jobDate.toDateString()) {
          return person['dateRed'] = true;
        } else {
          var timeDiff = Math.abs(now.getTime() - jobDate.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          return person['dateGreen'] = true;
        }
      }


  }]);
