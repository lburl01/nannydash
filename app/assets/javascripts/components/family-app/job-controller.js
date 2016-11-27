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

    }]);
