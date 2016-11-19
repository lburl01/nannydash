(function() {
  angular
  .module('app')
  .component('pendingParent', {
    templateUrl: 'pending-parent.html',
    bindings: {
      parent: '<'
    },
    controller: ['pendingParentsAPI', PendingParent]
  });

  function PendingParent(pendingParentsAPI) {

  }
})();
