angular.module('familyApp')
    .controller('familyAppBabysitterProfileController', ["familyAppAPI", "$http", "$state", "$stateParams", function (familyAppAPI, $http, $state, $stateParams) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.user = $stateParams.sitterId;
      this.total = familyAppAPI.totalBabysitters;
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
      familyAppAPI.userProfile(self.user).success(function(response) {
        self.user = response
        console.log(response);
        self.calculateAge(self.user.birthday);
        return self.user;
      });

      /*************************
      Verifying Certifications
      *************************/
      this.toggleFirstAid = function(id, cert) {
        // cert = !cert;
        // var data = {};
        // data['first_aid_certification'] = cert;
        // console.log(data, id);
        familyAppAPI.first_aid(id);
      }
      this.toggleCPR = function(id, cert) {

      }
      /*************************
      If user edits input fields, data will be saved in object
      *************************/
      this.updateBabysitter = function(id) {
        self.changed = true;
        familyAppAPI.updateUser(id, self.updatedBabysitters);
      };
      /*************************
      If user deletes babysitter, sitter will be removed from database
      *************************/
      this.deleteBabysitter = function(id) {
        var result = confirm("Are you sure you want to delete user?");
        if (result) {
          familyAppAPI.deleteUser(id, self.updatedBabysitters);
          $state.go('babysitters',{reload: true});
        }
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
        familyAppAPI.list().success(function(response) {
          var found = false;
          for(var i= 0; i < response.sitters.length; i++) {
            if(response.sitters[i].first_name.toLowerCase() === user.toLowerCase() || response.sitters[i].last_name.toLowerCase() === user.toLowerCase()) {
              familyAppAPI.userProfile(response.sitters[i].sitter_id).success(function(newResponse) {
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
      When user clicks message icon, page will re-direct to new message
      *************************/
      this.newMessage = function(id) {
        console.log(id);
        $state.go('new-message', {
          messageSitterId: id
        });
      };
      /*************************
      Delete Popup
      *************************/
      this.popup = function() {
        self.visibility = !self.visibility;
      };

  }]);
