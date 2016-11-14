(function() {
  'use strict';
  angular
    .module('app')
    .component('familyList', {
      bindings: {
        families: '<'
      },
      templateUrl: 'family-list.html',
      controller: ['familyAPI', FamilyListController]
    });

    function FamilyListController(familyAPI) {
      var ctrl = this;
      ctrl.$onInit = function() {
        familyAPI.list().then(function(response) {
          ctrl.families = response.data;
        });
      };

    }

})();
