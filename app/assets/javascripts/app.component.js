(function() {
  'use strict';
  angular
    .module('app')
    .component('app', {
      bindings: {
        count: '<'
      },
      templateUrl: 'app.html',
      controller: ['appAPI', AppController]
    });

  function AppController (appAPI) {
    var ctrl = this;

    ctrl.$onInit = function() {

      appAPI.totalCount().then(function(data) {
        ctrl.count = data;
      });
      
    };

  }
})();
