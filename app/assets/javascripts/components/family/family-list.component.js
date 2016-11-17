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
      ctrl.dropIt = false;
      ctrl.counties = [];

      ctrl.$onInit = function() {
        familyAPI.countyList().then(function(response) {
          ctrl.counties = response;
        });
      };

      ctrl.dropdown = function() {
        ctrl.dropIt = !ctrl.dropIt;
      };

      ctrl.addPanel = function(panel) {
        panels.push(panel);
      };

      ctrl.selectPanel = function(panel) {
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
