(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('parentList', {
    bindings: {
      families: '<'
    },
    templateUrl: 'nanny/parent-list.html',
    controller: ['nannyAppAPI', NannyParentList]
  });

  function NannyParentList(nannyAppAPI) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.selectedCounty = "";
      ctrl.dropIt = false;
      ctrl.counties = [];

      nannyAppAPI.countyList().then(function(response) {
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
