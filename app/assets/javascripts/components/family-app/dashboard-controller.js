angular.module('familyApp')
    .controller('familyDashboard', ["familyAppAPI", "$http", "$state", "$stateParams", function (familyAppAPI, $http, $state, $stateParams) {
      /*************************
      Variables
      *************************/
      var self = this;

      /*************************
      Loading in dashboard endpoints
      *************************/
      familyAppAPI.list().success(function(response) {
        self.application = response.applications
        self.assignments = response.assignments
        self.messages = response.messages;
        self.openJobs = response.open_jobs;
        console.log(self.messages);
        console.log(self.openJobs);
      }, function(response) {
        alert('Failed');
      });
      /*************************
      Checking if message was read
      *************************/
      this.readValidate = function(value) {
        if(value === true) {
          return 'Yes';
        } else if(value === false) {
          return 'No';
        }
      }

      this.changeStates = function(page) {
        $state.go(page);
      }
      /*************************
      When user clicks on pending application, first sees if role is nanny/babysitter
      then takes user to more detailed application page
      *************************/
      this.pendingApplication = function(person) {
        if(person.role === "nanny") {
          familyAppAPI.pendingApps(person.application_id).success(function(response) {
            $state.go("pendingBabysitterInfo", {sitterId: response.id});
          });
        } else {
          familyAppAPI.pendingApps(person.application_id).success(function(response) {
            $state.go("pendingParentInfo", {parentId: response.id});
          });
        }
      }
      /*************************
      When user clicks on new/current jobs
      *************************/
      this.newJobs = function(job) {
        familyAppAPI.jobDetails(job.job_id).success(function(response) {
          $state.go("newJobInfo", {jobId: job.job_id});
        });
      }
      /*************************
      When user clicks on message
      *************************/
      this.message = function(object, key) {
        console.log(object, key);
        var messageId = object.message_id;
        familyAppAPI.message(object.conversation_id, messageId).success(function(response) {
          $state.go('message', {messageParam: {message: response}, conversationId: response.conversation_id}, {reload: true});
        });
      }
      /*************************
      Reformating Date
      *************************/
      this.getDate = function(data) {
        var myDays = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
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
        var fullDate;

        var now = new Date();
        var nowDay = now.getDate();

        for(var i = 0; i <= myDays.length; i++) {
          if(myDays[i] === myDays[month]) {
            if(day === nowDay) {
              console.log('working');
              return fullDate = myDays[month] + ' ' + day + ' at ' + strTime;
            }
          }
        }
      }


  }]);
