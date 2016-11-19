(function() {
  'use strict';
  angular
    .module('app')
    .component('app', {
      bindings: {
        count: '<'
      },
      templateUrl: 'app.html',
      controller: ['appAPI', '$scope', AppController]
    });

  function AppController (appAPI, $scope) {
    var ctrl = this;

    ctrl.$onInit = function() {
      appAPI.totalCount().then(function(data) {
        ctrl.count = data;
      });
    };

    $scope.$on('updateCount', function(event) {
      console.log('scope on updated count');
      appAPI.totalCount().then(function(data) {
        ctrl.count = data;
      });
    });

  }
})();
