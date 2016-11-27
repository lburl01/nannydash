(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('nannyDashboard', {
    templateUrl: 'nanny/dashboard.html',
    bindings: {
      scheduledJob: '<',
      requestedJob: '<'
    },
    controller: ['nannyApp', NannyDashboard]
  });

  function NannyDashboard() {

  }
})();
