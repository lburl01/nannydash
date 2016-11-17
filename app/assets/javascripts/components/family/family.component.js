(function() {
  'use strict';
  angular
    .module('app')
    .component('family', {
      bindings: {
        family: '<'
      },
      require: {
        'parent': '^familyList'
      },
      transclude: true,
      templateUrl: 'family.html',
      controller: ['familyAPI', FamilyController]
    });

  function FamilyController(familyAPI) {
    var ctrl = this;
    ctrl.usersPerPage = 6;

    ctrl.handleToggle = function(id) {
      familyAPI.toggleActiveState(id).then( function() {
        ctrl.family.active = !ctrl.family.active;
      });
    };

    ctrl.$onInit = function () {
      ctrl.parent.addPanel(ctrl);
    };

    ctrl.turnOn = function() {
      ctrl.selected = true;
    };

    ctrl.turnOff = function() {
      ctrl.selected = false;
    };

    ctrl.select = function() {
      ctrl.parent.selectPanel(ctrl);
    };

  }

})();
