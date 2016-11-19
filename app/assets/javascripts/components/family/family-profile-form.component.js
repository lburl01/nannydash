(function() {
  'use strict';
  angular
    .module('app')
    .component('familyProfileForm', {
      templateUrl: 'family-profile-form.html',
      bindings: {
        profile: '<'
      },
      controller: ['familyAPI', '$filter', '$scope', FamilyProfileForm]
    });

    function FamilyProfileForm(familyAPI, $filter, $scope) {
      var ctrl = this;
      ctrl.id = ctrl.profile.family_id;
      ctrl.updateFamily = {};

      ctrl.updateCurrent = function(key, value) {
        ctrl.updateFamily[key] = value;
        console.log(ctrl.updateFamily);
      };

      ctrl.save = function(id) {
        familyAPI.saveProfile(id, ctrl.updateFamily).then(function() {
          console.log('success! saved!');
          $scope.$emit('updateCount', 0);
        });
      };

      ctrl.delete = function(id) {
        familyAPI.deleteProfile(id).then(function() {
          console.log('success! deleted');
        });
      };
    }
})();
