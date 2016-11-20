(function() {
  'use strict';
  angular
    .module('app')
    .component('pendingParentInfoForm', {
      templateUrl: 'pending-parent-info-form.html',
      bindings: {
        info: '<'
      },
      controller: ['pendingParentsAPI', PendingParentInfoForm]
    });

    function PendingParentInfoForm(pendingParentsAPI) {
      var ctrl = this;

      ctrl.handleToggle = function(id) {
        pendingParentsAPI.toggleApprove(id).then( function() {
          ctrl.info.active = !ctrl.info.active;
        });
      };
    }

})();
