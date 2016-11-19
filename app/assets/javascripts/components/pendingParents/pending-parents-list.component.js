(function() {
  'use strict';

  angular
    .module('app')
    .component('pendingParentsList', {
      templateUrl: 'pending-parents-list.html',
      bindings: {
        parents: '<'
      },
      controller: ['pendingParentsAPI', PendingParentsController]
    });

    function PendingParentsController(pendingParentsAPI) {

    }

})();
