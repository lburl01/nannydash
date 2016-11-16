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

      this.addCerts = function() {
        $('<div>').attr('class', 'cert-container').appendTo('.cert');
        $('<input>').attr('id', 'cpr').appendTo('.cert-container');
        $('<span>').html('-').appendTo('.cert-container');
      }

      this.updateBabysitter = function(id) {
        console.log(self.updatedBabysitters);
        babysitterDirectoryAPI.updateUser(id, self.updatedBabysitters);
      }

      this.userInputClick = function(key, value, sitter_id) {
        self.updatedBabysitters['id'] = sitter_id;
        var updatedUser = self.updatedBabysitters[key] = value;
      }

    }]);
