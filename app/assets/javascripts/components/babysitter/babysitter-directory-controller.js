angular.module('app')
    .controller('babysitterDirectoryController', function ($http, $state, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.babysitters = [];
      this.totalUsers = 0;
      this.usersPerPage = 5;
      /*************************
      When page first loads, load in babysitters
      *************************/
      this.init = function() {
        babysitterDirectoryAPI.list().success(function(response) {
          self.babysitters = response;
          self.totalUsers = response.length;
        }, function(response) {
          alert('Failed');
        });
      }
      this.init();
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
      this.userClick = function(person) {
        $state.go('nannyDash.babysitter-profile', {babysitterParam: {sitter: person}});
      }
    });
