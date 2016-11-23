(function() {
  'use strict';
  angular
    .module('nannyApp')
    .component('nannyApp', {
      bindings: {
        count: '<'
      },
      templateUrl: 'nanny/nanny-app.html',
      controller: ['nannyApp', '$http', '$scope', '$window', NannyAppController]
  });

  function NannyAppController(nannyApp, $http, $scope, $window) {
    var ctrl = this;

    ctrl.$onInit = function() {
      nannyApp.totalCount().then(function(data) {
        ctrl.count = data;
      });
    };

    $scope.$on('updateCount', function(event) {
      console.log('scope on updated count');
      nannyApp.totalCount().then(function(data) {
        ctrl.count = data;
      });
    });

    ctrl.signOut = function() {
      nannyApp.deleteUser();
    };

  }
})();
