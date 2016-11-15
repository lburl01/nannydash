(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfile', {
      bindings: {
        profile: '<'
      },
      require: {
        'parent': '^family'
      },
      templateUrl: 'family-profile.html',
      controller: ['familyAPI', FamilyProfile]
    });

  function FamilyProfile(familyAPI) {
    var ctrl = this;

    ctrl.$onInit = function() {
    };
  }
})();
