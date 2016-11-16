(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfileForm', {
      templateUrl: 'family-profile-form.html',
      bindings: {
        profile: '<'
      },
      controller: ['familyAPI', FamilyProfileForm]
    });

    function FamilyProfileForm(familyAPI) {
      
    }
})();
