(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfileForm', {
      templateUrl: 'family-profile-form.html',
      bindings: {
        profile: '<'
      },
      controller: ['familyAPI', '$filter', FamilyProfileForm]
    });

    function FamilyProfileForm(familyAPI, $filter) {
      var ctrl = this;
      ctrl.id = ctrl.profile.family_id;
      ctrl.updateFamily = {};

      ctrl.updateCurrent = function(key, value) {
        ctrl.updateFamily[key] = value;
        console.log(ctrl.updateFamily);
      };

      ctrl.save = function(id) {
        familyAPI.saveProfile(id, ctrl.updateFamily).then(function() {
          console.log('success! yes! good job!');
        });
      };

      console.log(ctrl.profile.family_id);
      console.log(familyForm.phone[0]);
    }
})();
