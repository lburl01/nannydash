(function() {
  angular
  .module('app')
  .component('pendingParentInfo', {
    templateUrl: 'pending-parent-info.html',
    bindings: {
      info: '<'
    },
    controller: ['pendingParentsAPI', PendingParentInfo]
  });

  function PendingParentInfo(pendingParentsAPI) {

  }
})();
