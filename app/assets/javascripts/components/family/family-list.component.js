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

    }
})();
