(function() {
  'use strict';

  angular
    .module('app')
    .component('pendingBabysittersList', {
      templateUrl: 'pending-babysitters-list.html',
      bindings: {
        babysitters: '<'
      },
      controller: ['pendingBabysittersAPI', PendingBabysittersList]
    });

    function PendingBabysittersList() {
      
    }

})();
