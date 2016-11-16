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
      var ctrl = this;
      console.log(ctrl.profile);
      console.log(familyForm.phone[0]);
    }
})();
