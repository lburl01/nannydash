(function() {
  'use strict';
  angular
    .module('app')
    .component('familyList', {
      bindings: {
        families: '<',
        counties: '<'
      },
      transclude: true,
      templateUrl: 'family-list.html',
      controller: ['familyAPI', FamilyListController]
    });

    function FamilyListController(familyAPI) {
      var ctrl = this;
      var panels = [];

      ctrl.$onInit = function() {
        ctrl.selectedCounty = "";
        ctrl.dropIt = false;
        ctrl.counties = [];
        ctrl.columnSort = "";
        ctrl.reverse = true;

        familyAPI.countyList().then(function(response) {
          ctrl.counties = response;
        });
      };

      ctrl.sortBy = function(columnSort) {
        console.log(columnSort);
        ctrl.columnSort = columnSort;
        ctrl.reverse = !ctrl.reverse;
      };

      ctrl.selectCounty = function(county) {
        ctrl.selectedCounty = county;
        ctrl.dropIt = false;
      };

      ctrl.dropdown = function() {
        ctrl.dropIt = !ctrl.dropIt;
      };

      ctrl.addPanel = function(panel) {
        panels.push(panel);
      };

      ctrl.selectPanel = function(panel) {
        if (panel.selected) {
          panels.forEach(function(panel) {
            panel.turnOff();
          });
          return;
        }

        for (var i in panels) {
          if (panel === panels[i]) {
            panels[i].turnOn();
          } else {
            panels[i].turnOff();
          }
        }
      };

    }
})();
