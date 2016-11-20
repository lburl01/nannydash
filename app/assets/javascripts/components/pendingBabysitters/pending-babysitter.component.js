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

      ctrl.calculateAge = function(birthday) {
        var ageDifMs = Date.now() - new Date(birthday);
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      };
    }

})();
