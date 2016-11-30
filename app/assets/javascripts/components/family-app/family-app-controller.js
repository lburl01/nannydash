angular.module('familyApp').controller('familyAppController', ['$http', 'familyAppAPI', function($http, familyAppAPI) {
    var self = this;

    this.signOut = function() {
      familyAppAPI.deleteUser();
    };

    familyAppAPI.user().success(function(response) {
      self.firstName = response.first_name;
    });

    familyAppAPI.counts().success(function(response) {
      console.log(response);
      self.babysitters = response.all_sitters;
      self.jobs = response.confirmed_jobs + response.pending_jobs;
      self.newMessages = response.new_messages;
    });

  }]);
