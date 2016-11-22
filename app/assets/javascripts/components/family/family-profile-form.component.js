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
      ctrl.savedText = false;
      ctrl.deletedText = false;
      ctrl.id = ctrl.profile.family_id;
      ctrl.updateFamily = {};

      ctrl.updateCurrent = function(key, value) {
        ctrl.updateFamily[key] = value;
        ctrl.savedText = false;
      };

      ctrl.save = function(id) {
        familyAPI.saveProfile(id, ctrl.updateFamily).then(function() {
          ctrl.savedText = true;
        });
      };

      ctrl.delete = function(id) {
        familyAPI.deleteProfile(id).then(function() {
          ctrl.deletedText = true;
        });
      };
    }
})();
