angular.module('app')
    .controller('babysitterDirectoryController', function ($http, $state, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.babysitters = babysitterDirectoryAPI.totalBabysitters;
      this.totalUsers = 0;
      this.usersPerPage = 5;
      /*************************
      When page first loads, load in babysitters
      *************************/
      babysitterDirectoryAPI.list().success(function(response) {
        babysitterDirectoryAPI.totalBabysitters = response;
        self.babysitters = babysitterDirectoryAPI.totalBabysitters;
        self.totalUsers = response.length;
      }, function(response) {
        alert('Failed');
      });
      /*************************
      Transforming full date/time string to just plain date
      *************************/
      this.getDate = function(data) {
        var objectDate = data.joined;
        var convertDate = new Date(objectDate);
        return newDate = convertDate.getMonth() + '/' + convertDate.getDate() + '/' + convertDate.getFullYear();
      }
      /*************************
      Checking to see if CPR is true/false .. then displaying color & new text
      *************************/
      this.cprCheck = function(value) {
        if(value === true) {
          return 'yes';
        } else {
          return 'no'
        }
      }
      /*************************
      When user clicks on profile, it will store data and post on new profile page
      *************************/
      this.userClick = function(personId) {
        babysitterDirectoryAPI.userProfile(personId).success(function(response) {
          console.log(response);
          $state.go('babysitter-profile', {babysitterParam: {sitter: response}, sitterId: personId}, {reload: true});
        });
      }
    });
