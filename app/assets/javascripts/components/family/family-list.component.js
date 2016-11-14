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
        }, function(response) {
          alert('Failed');
        });
      };

      ctrl.changeStatus = function() {
        console.log('change');
        if (this.active) {
          this.active = false;
          console.log(this.active);
        } else {
          this.active = true;
        }
      };

    }

})();
