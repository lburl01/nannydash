(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfileForm', {
      templateUrl: 'family-profile-form.html',
      bindings: {
        profile: '<'
      },
      controller: ['familyAPI', '$filter', '$state', FamilyProfileForm]
    });

    function FamilyProfileForm(familyAPI, $filter, $state) {
      var ctrl = this;
      ctrl.savedText = false;
      ctrl.deletedText = false;
      ctrl.id = ctrl.profile.family_id;
      ctrl.updateFamily = {};
      ctrl.visibility = false;

      ctrl.popup = function() {
        ctrl.visibility = !ctrl.visibility;
      };

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
        ctrl.deletedText = true;
        ctrl.visibility = false;
        familyAPI.deleteProfile(id).then(function() {
          $state.go('family');
        });
      };
    }
})();
