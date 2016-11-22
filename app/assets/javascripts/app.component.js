(function() {
  'use strict';
  angular
    .module('app')
    .component('app', {
      bindings: {
        count: '<'
      },
      templateUrl: 'app.html',
      controller: ['appAPI', '$scope', '$http', '$location', '$window', AppController]
    });

  function AppController (appAPI, $scope, $http, $location, $window) {
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

    ctrl.logout = function() {
      $http.delete("/users/sign_out").then(function() {
        $window.location.href = '/home';

        console.log('Success! Signed out!');
      }, function() {
        alert("Failed to sign out");
      });
    };

  }
})();
