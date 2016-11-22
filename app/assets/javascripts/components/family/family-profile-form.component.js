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
      ctrl.saveText = "Save Changes";
      ctrl.id = ctrl.profile.family_id;
      ctrl.updateFamily = {};

      ctrl.updateCurrent = function(key, value) {
        ctrl.updateFamily[key] = value;
        ctrl.saveText = "Save Changes";
        console.log(ctrl.updateFamily);
      };

      ctrl.save = function(id) {
        familyAPI.saveProfile(id, ctrl.updateFamily).then(function() {
          ctrl.saveText = "Saved!";
          console.log('success! saved!');
        });
      };

      ctrl.delete = function(id) {
        familyAPI.deleteProfile(id).then(function() {
          console.log('success! deleted');
        });
      };
    }
})();
