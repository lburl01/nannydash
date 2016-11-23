(function() {
  'use strict';
  angular
    .module('nannyApp')
    .component('nannyApp', {
      templateUrl: 'nanny/nanny-app.html',
      controller: ['nannyApp', '$http', '$window', NannyAppController]
  });

  function NannyAppController(nannyApp, $http, $window) {
    var ctrl = this;

    ctrl.signOut = function() {
      nannyApp.deleteUser();
    };

  }
})();
