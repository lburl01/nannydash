(function() {
  'use strict';
  angular
    .module('app')
    .component('app', {
      bindings: {
        count: '<'
      },
      templateUrl: 'app.html',
      controller: ['appAPI', '$scope', '$http', '$location', '$window', 'dashboardAPI', AppController]
    });

  function AppController (appAPI, $scope, $http, $location, $window, dashboardAPI) {
    var ctrl = this;

    dashboardAPI.conversationMessages().success(function(response) {
      for(var i = 0; i < response.length; i++) {
        if(response[i].sender_name != "Agency Manager" && response[i].recipient_read === false) {
          return ctrl.newMessage = true;
        }
      }
    });

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

    dashboardAPI.user().success(function(response) {
      ctrl.firstName = response.first_name;
    });

  }
})();
