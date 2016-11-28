angular.module('familyApp')
    .controller('upcomingJobsController', ["familyAppAPI", "$http", "$state", function (familyAppAPI, $http, $state) {
      /*************************
      Variables
      *************************/
      var self = this;

      familyAppAPI.allJobs().success(function(response) {
        console.log(response);
        self.jobs = response;
      });


      this.getDate = function(data) {
        var myMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug", "Sept", "Oct", "Nov", "Dec"];
        var myDays = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
        var date = new Date(data);
        var month = date.getMonth();
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        for(var i = 0; i <= myMonth.length; i++) {
          if(myMonth[i] === myMonth[month]) {
            return myMonth[month] + ' ' + day;
          }
        }
      }

      this.jobClick = function(id) {
        $state.go('job', {jobId: id});
      }
  }]);
