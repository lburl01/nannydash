(function() {
  'use strict';

  angular
    .module('app')
    .component('pendingBabysitter', {
      templateUrl: 'pending-babysitter.html',
      bindings: {
        sitter: '<'
      },
      controller: ['pendingBabysittersAPI', PendingBabysitter]
    });

    function PendingBabysitter() {

    }

})();
