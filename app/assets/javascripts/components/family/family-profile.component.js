(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfile', {
      bindings: {
        profile: '<'
      },
      templateUrl: 'family-profile.html',
      controller: ['familyAPI', FamilyProfile]
    });

  function FamilyProfile(familyAPI) {
    var ctrl = this;

    ctrl.handleToggle = function(id) {
      familyAPI.toggleActiveState(id).then( function() {
        ctrl.profile.active = !ctrl.profile.active;
      });
    };

  }
})();
