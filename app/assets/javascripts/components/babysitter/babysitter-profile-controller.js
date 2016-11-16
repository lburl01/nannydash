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

      this.addCerts = function() {
        $('<div>').attr('class', 'cert-container').appendTo('.cert');
        $('<input>').attr('id', 'cpr').appendTo('.cert-container');
        $('<span>').html('-').appendTo('.cert-container');
      }

    });
