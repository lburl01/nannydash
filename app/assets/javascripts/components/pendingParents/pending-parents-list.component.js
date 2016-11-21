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
      var ctrl = this;

      ctrl.$onInit = function() {
        ctrl.columnSort = "last_name";
        ctrl.reverse = false;
        ctrl.selectedCounty = "";
        ctrl.dropIt = false;
        ctrl.counties = [];

        ctrl.sortBy = function(columnSort) {
          ctrl.columnSort = columnSort;
          ctrl.reverse = !ctrl.reverse;
        };

        pendingParentsAPI.countyList().then(function(response) {
          ctrl.counties = response;
        });
      };

      ctrl.selectCounty = function(county) {
        ctrl.selectedCounty = county;
        ctrl.dropIt = false;
      };

      ctrl.dropdown = function() {
        ctrl.dropIt = !ctrl.dropIt;
      };
    }
})();
