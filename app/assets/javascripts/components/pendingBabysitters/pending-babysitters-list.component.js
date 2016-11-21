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
      var ctrl = this;
      
      ctrl.$onInit = function() {
        ctrl.reverse = false;
        ctrl.columnSort = "";

        ctrl.sortBy = function(columnSort) {
          ctrl.columnSort = columnSort;
          ctrl.reverse = !ctrl.reverse;
        };

      };
    }

})();
