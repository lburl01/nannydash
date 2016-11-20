angular.module('app')
    .controller('babysitterProfileController', ["$scope", "$http", "$state", "$stateParams", "babysitterDirectoryAPI", function ($scope, $http, $state, $stateParams, babysitterDirectoryAPI) {
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
      /*************************
      Verifying Certifications
      *************************/
      this.addCerts = function() {
        console.log('in');
        $('<div>').attr('class', 'new-cert-container').appendTo('.cert');
        $('<input>').attr('id', 'cpr').appendTo('.new-cert-container');
        $('<span>').html('-').appendTo('.new-cert-container');
      };
      /*************************
      If user edits input fields, data will be saved in object
      *************************/
      this.updateBabysitter = function(id) {
        babysitterDirectoryAPI.updateUser(id, self.updatedBabysitters);
      };
      /*************************
      If user deletes babysitter, sitter will be removed from database
      *************************/
      this.deleteBabysitter = function(id) {
        babysitterDirectoryAPI.deleteUser(id, self.updatedBabysitters);
        $state.go('babysitters');
      };
      /*************************
      Convert Strings
      *************************/
      this.convertRate = function(rate) {
        return parseFloat(rate).toFixed(2);
      };
      /*************************
      When user hits 'submit' object will be patched to database
      *************************/
      this.userInputClick = function(key, value, sitter_id) {
        self.convertRate(value);
        self.updatedBabysitters['id'] = sitter_id;
        var updatedUser = self.updatedBabysitters[key] = value;
        console.log(updatedUser);
      };
      /*************************
      Calculating age
      *************************/
      this.calculateAge = function() { // birthday is a date
        var userBirthday = new Date($stateParams.babysitterParam.sitter.birthday);
        var nowDate = Date.now();
        var ageDif = nowDate - userBirthday.getTime();
        var ageDate = new Date(ageDif); // miliseconds from epoch
        self.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      };
      this.calculateAge();
      /*************************
      Transforming full date/time string to just plain date
      *************************/
      this.getDate = function(data) {
        var objectDate = data;
        var convertDate = new Date(objectDate);
        return newDate = convertDate.getMonth() + '/' + convertDate.getDate() + '/' + convertDate.getFullYear();
      };
      this.getDate();
  }]);
