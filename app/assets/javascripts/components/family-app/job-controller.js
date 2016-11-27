angular.module('familyApp')
    .controller('jobController', ['$http', '$state', '$stateParams', 'familyAppAPI', function ($http, $state, $stateParams, familyAppAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.id = $stateParams.jobId

      familyAppAPI.jobDetails(this.id).success(function(response) {
        console.log(response);
        return self.familyJob = response;
      });

      this.date = function(date) {
        console.log(date);
        return new Date(date);
      }

      this.time = function(time) {
        self.newTime = time.slice(-2);

        return self.newTime;
      }

      this.confirm = function(id) {
        var confirmObj = {};
        confirmObj['id'] = id

        familyAppAPI.confirmJob(confirmObj);
      }
      /*************************
      If user edits input fields, data will be saved in object
      *************************/
      this.updateUser = function() {
        self.changed = true;
        babysitterDirectoryAPI.updateUser(self.updatedBabysitters);
      };
      /*************************
      When user hits 'submit' object will be patched to database
      *************************/
      this.userInputClick = function(key, value, sitter_id) {
        self.convertRate(value);
        self.updatedBabysitters['id'] = sitter_id;
        var updatedUser = self.updatedBabysitters[key] = value;
        console.log(self.updatedBabysitters);
      }

    }]);
