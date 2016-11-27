angular.module('familyApp')
    .controller('babysitterListController', ["familyAppAPI", "$http", "$state", function (familyAppAPI, $http, $state) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.dropIt = false;
      this.counties;
      /*************************
      When page first loads, load in babysitters
      *************************/
      familyAppAPI.babysitters().success(function(response) {
        console.log(response);
        self.babysitters = response.sitters;
        self.counties = response.counties;
      });

      /*************************
      Toggle county dropdown
      *************************/
      this.dropdown = function() {
        self.dropIt = !self.dropIt;
      };

      /*************************
      Transforming full date/time string to just plain date
      *************************/
      this.getDate = function(data) {
        var objectDate = data.joined;
        var convertDate = new Date(objectDate);
        return newDate = convertDate.getMonth() + '/' + convertDate.getDate() + '/' + convertDate.getFullYear();
      };
      /*************************
      Calculating age
      *************************/
      this.calculateAge = function(age) {
        var userBirthday = new Date(age);
        var nowDate = Date.now();
        var ageDif = nowDate - userBirthday.getTime();
        var ageDate = new Date(ageDif);
        return self.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      }
      /*************************
      When user clicks on profile, it will store data and post on new profile page
      *************************/
      this.userClick = function(personId) {
        familyAppAPI.userProfile(personId).success(function(response) {
          $state.go('babysitter_profile', {babysitterParam: {sitter: response}, sitterId: personId}, {reload: true});
        });
      };


  }]);
