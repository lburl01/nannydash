(function() {
  'use strict';
  angular
    .module('nannyApp')
    .component('nannyApp', {
      bindings: {
        count: '<'
      },
      templateUrl: 'nanny/nanny-app.html',
      controller: ['nannyApp', '$http', '$window', NannyAppController]
  });

  function NannyAppController(nannyApp, $http, $window) {
    var ctrl = this;

    ctrl.$onInit = function() {

      nannyApp.totalCount().then(function(data) {
        ctrl.count = data;
      });

    };

    ctrl.signOut = function() {
      nannyApp.deleteUser();
    };

  }
})();
