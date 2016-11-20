(function() {
  'use strict';

  angular
    .module('app')
    .component('pendingBabysitter', {
      templateUrl: 'pending-babysitter.html',
      bindings: {
        sitter: '<'
      },
      controller: ['pendingBabysittersAPI', '$filter', PendingBabysitter]
    });

    function PendingBabysitter(pendingBabysittersAPI, $filter) {
      var ctrl = this;
      ctrl.certified = "";

      ctrl.calculateAge = function(birthday) {
        var ageDifMs = Date.now() - new Date(birthday);
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      };

      ctrl.isCertified = function(babysitter) {
        if (babysitter.cpr_certification || babysitter.first_aid_certification) {
          ctrl.certified = true;
          return "yes";
        } else {
          ctrl.certified = false;
          return "no";
        }
      };

    }

})();
