(function() {
  'use strict';
  angular
    .module('nannyApp')
    .component('nannyApp', {
      templateUrl: 'nanny/nanny-app.html',
      controller: ['nannyAppAPI', '$http', '$window', NannyAppController]
  });

  function NannyAppController(nannyAppAPI, $http, $window) {
    var ctrl = this;

    ctrl.signOut = function() {
      nannyAppAPI.deleteUser();
    };

  }
})();
