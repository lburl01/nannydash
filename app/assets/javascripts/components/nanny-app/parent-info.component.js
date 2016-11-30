(function() {
  'use strict';
  angular
  .module('nannyApp')
  .component('nannyParentInfo', {
    bindings: {
      parent: '<'
    },
    templateUrl: 'nanny/parent-info.html',
    controller: ['nannyAppAPI', '$stateParams', NannyParentInfo]
  });

  function NannyParentInfo(nannyAppAPI, $stateParams) {
    var ctrl = this;
    ctrl.parentId = $stateParams.parentId;

  }
})();
