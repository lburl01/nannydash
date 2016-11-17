(function() {
  'use strict';
  angular
    .module('app')
    .component('familyCountyList', {
      bindings: {
        counties: '<'
      },
      templateUrl: 'family-county-list.html',
      controller: ['familyAPI', FamilyCountyList]
    });

  function FamilyCountyList(familyAPI) {
    var ctrl = this;

  }
})();
