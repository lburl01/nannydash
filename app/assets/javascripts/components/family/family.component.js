(function() {
  'use strict';
  angular
    .module('app')
    .component('family', {
      bindings: {
        family: '<'
      },
      templateUrl: 'family.html',
      controller: ['familyAPI', FamilyController]
    });

  function FamilyController(familyAPI) {
    var ctrl = this;

    ctrl.handleToggle = function(id) {
      familyAPI.toggleActiveState(id).then( function() {
        ctrl.family.active = !ctrl.family.active;
      });
    };

  }

})();
