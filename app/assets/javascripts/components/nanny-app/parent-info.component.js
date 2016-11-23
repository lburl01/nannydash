(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('nannyParentInfo', {
    bindings: {
      parent: '<'
    },
    templateUrl: 'nanny/parent-info.html'
  });
})();
