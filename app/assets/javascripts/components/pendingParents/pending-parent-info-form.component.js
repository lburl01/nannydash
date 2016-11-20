(function() {
  'use strict';
  angular
    .module('app')
    .component('pendingParentInfoForm', {
      templateUrl: 'pending-parent-info-form.html',
      bindings: {
        info: '<'
      },
      controller: ['pendingParentsAPI', '$scope', PendingParentInfoForm]
    });

    function PendingParentInfoForm(pendingParentsAPI, $scope) {
      var ctrl = this;

      ctrl.handleToggle = function(id) {
        pendingParentsAPI.toggleApprove(id).then( function() {
          ctrl.info.active = !ctrl.info.active;
          $scope.$emit('updateCount', {});

          console.log(ctrl.info.active);
          console.log(ctrl.info);
        });
      };
    }

})();
