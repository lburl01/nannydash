angular.module('app')
    .controller('babysitterProfileController', ["$scope", "$http", "$state", "$stateParams", "babysitterDirectoryAPI", function ($scope, $http, $state, $stateParams, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.userId = $stateParams.sitterId;
      this.user;
      this.total = babysitterDirectoryAPI.totalBabysitters;
      this.cpr = "CPR Certified";
      this.firstAid = "First-Aid Certified";
      this.userInput = false;
      this.updatedBabysitters = {};
      this.userInput = "";
      self.visibility = false;
      this.changed = true;

      /*************************
      Loads in current user on refresh
      *************************/
      babysitterDirectoryAPI.userProfile(self.userId).success(function(response) {
        self.user = response
        self.calculateAge(self.user.birthday);
        return self.user;
      });
      /*************************
      Verifying Certifications
      *************************/
      this.toggleCPR = function(id) {
        babysitterDirectoryAPI.cpr(id).then( function() {
          return self.user.cpr_certification = !self.user.cpr_certification;
        });;
      }
      this.toggleCert = function(id) {
        babysitterDirectoryAPI.first_aid(id).then( function() {
          return self.user.first_aid_certification = !self.user.first_aid_certification;
        });;
      }
      /*************************
      If user edits input fields, data will be saved in object
      *************************/
      this.updateBabysitter = function() {
        self.changed = true;
        babysitterDirectoryAPI.updateUser(self.updatedBabysitters);
      };
      /*************************
      If user deletes babysitter, sitter will be removed from database
      *************************/
      this.deleteBabysitter = function(id) {
        var idObj = {};
        idObj["id"] = id;
        console.log('delete');
        babysitterDirectoryAPI.deleteUser(idObj);
        $state.go('babysitters',{reload: true});
      }
      /*************************
      Convert Strings
      *************************/
      this.convertRate = function(rate) {
        return Number(rate).toFixed(2);
      }
      /*************************
      When user hits 'submit' object will be patched to database
      *************************/
      this.userInputClick = function(key, value, sitter_id) {
        self.convertRate(value);
        self.updatedBabysitters['id'] = sitter_id;
        var updatedUser = self.updatedBabysitters[key] = value;
        console.log(self.updatedBabysitters);
      }
      /*************************
      Calculating age
      *************************/
      this.calculateAge = function(birthday) { // birthday is a date
        var userBirthday = new Date(birthday);
        var nowDate = Date.now();
        var ageDif = nowDate - userBirthday.getTime();
        var ageDate = new Date(ageDif); // miliseconds from epoch
        self.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      };
      /*************************
      Transforming full date/time string to just plain date
      *************************/
      this.getDate = function(data) {
        var objectDate = data;
        var convertDate = new Date(objectDate);
        return newDate = convertDate.getMonth() + '/' + convertDate.getDate() + '/' + convertDate.getFullYear();
      }
      this.getDate()
      /*************************
      Search user in input search field
      *************************/
      this.searchUser = function(user) {
        babysitterDirectoryAPI.list().success(function(response) {
          var found = false;
          for(var i= 0; i < response.sitters.length; i++) {
            if(response.sitters[i].first_name.toLowerCase() === user.toLowerCase() || response.sitters[i].last_name.toLowerCase() === user.toLowerCase()) {
              babysitterDirectoryAPI.userProfile(response.sitters[i].sitter_id).success(function(newResponse) {
                found = true;
                $state.go('babysitter-profile', {babysitterParam: {sitter: newResponse}, sitterId: newResponse.sitter_id}, {reload: true,  notify: true});
              });
            }
          }
          if(!found){
            $('<p>').html('Sorry, that user does not exist.').appendTo('.search');
          }
        });
      }
      /*************************
      Delete Popup
      *************************/
      this.popup = function() {
        self.visibility = !self.visibility;
      };
  }]);
