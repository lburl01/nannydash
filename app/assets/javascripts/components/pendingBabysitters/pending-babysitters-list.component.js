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

    function PendingBabysittersList(pendingBabysittersAPI) {
      var ctrl = this;

      ctrl.$onInit = function() {
        ctrl.reverse = false;
        ctrl.columnSort = "";
        ctrl.counties = [];
        ctrl.dropIt = false;
        ctrl.selectedCounty = "";

        ctrl.sortBy = function(columnSort) {
          ctrl.columnSort = columnSort;
          ctrl.reverse = !ctrl.reverse;
        };
        pendingBabysittersAPI.countyList().then(function(response) {
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
