angular.module('familyApp')
    .controller('jobController', ['$http', '$state', '$stateParams', 'familyAppAPI', function ($http, $state, $stateParams, familyAppAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.id = $stateParams.jobId;
      this.updatedJob = {};

      this.init = function() {
        familyAppAPI.jobDetails(this.id).success(function(response) {
          self.date(response.date);
          self.startTime(response.start_time);
          self.endTime(response.end_time);
          self.familyJob = response;
        });
      }

      this.date = function(date) {
        self.jobDate = date;
      }

      this.startTime = function(time) {
        self.newStartTime = time.slice(0, 5);
      }

      this.endTime = function(time) {
        self.newEndTime = time.slice(0, 5);
      }

      this.confirm = function(id) {
        familyAppAPI.confirmJob(id);
        $state.go('job', {jobId: id}, {reload: true});
      }
      /*************************
      When user hits 'submit' object will be patched to database
      *************************/
      this.updateUser = function() {
        self.changed = true;
        babysitterDirectoryAPI.updateUser(self.updatedBabysitters);
      };
      /*************************
      If user edits input fields, data will be saved in object
      *************************/
      this.convertTime = function(key, value) {
        //var jobId = self.familyJob.job_id;

        /// start hour format
        var hours = value.getHours();
        hours = ("0" + hours).slice(-2);
        // start minutes format
        var mins = value.getMinutes();
        mins = ("0" + mins).slice(-2);
        var time = hours + ':' + mins;
        console.log(time);
      }

      this.convertDate = function(key, value) {
        var date = new Date(value);
        var fullDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
        self.updatedJob['date'] = fullDate;
        console.log(self.updatedJob);
      }

    }]);
