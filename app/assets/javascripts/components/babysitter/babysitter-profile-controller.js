angular.module('app')
    .controller('babysitterProfileController', function ($scope, $http, $state, $stateParams, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.user = $stateParams.babysitterParam.sitter;
      this.total = babysitterDirectoryAPI.totalBabysitters;
      this.cpr = "CPR Certified";
      this.firstAid = "First-Aid Certified";
      this.userInput = false;
      this.updatedBabysitters = {};

      this.addCerts = function() {
        console.log('in');
        $('<div>').attr('class', 'new-cert-container').appendTo('.cert');
        $('<input>').attr('id', 'cpr').appendTo('.new-cert-container');
        $('<span>').html('-').appendTo('.new-cert-container');
      }

      this.updateBabysitter = function(id) {
        console.log(self.updatedBabysitters);
        babysitterDirectoryAPI.updateUser(id, self.updatedBabysitters);
      }

      this.userInputClick = function(key, value, sitter_id) {
        self.updatedBabysitters['id'] = sitter_id;
        var updatedUser = self.updatedBabysitters[key] = value;
      }

      this.calculateAge = function() { // birthday is a date
        console.log($stateParams.babysitterParam.sitter.birthday);
        // var ageDif = Date.now() - $stateParams.babysitterParam.sitter.getTime();
        // var ageDate = new Date(ageDif); // miliseconds from epoch
        // var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        // console.log(age);
      }
      this.calculateAge();

    });
