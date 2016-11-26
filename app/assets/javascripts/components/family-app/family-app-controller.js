angular.module('familyApp').controller('familyAppController', ['$http', 'familyAppAPI', function($http, familyAppAPI) {
    this.signOut = function() {
      familyAppAPI.deleteUser();
    };

  }]);
