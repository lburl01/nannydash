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

    ctrl.$onInit = function() {
      ctrl.newMessage = null;
      appAPI.totalCount().then(function(data) {
        ctrl.count = data;
      });
    };

    dashboardAPI.user().success(function(response) {
      ctrl.firstName = response.first_name;
      ctrl.name = ctrl.firstName + ' ' + response.last_name;
    });

    dashboardAPI.conversationMessages().success(function(response) {
      for(var i = 0; i < response.length; i++) {
        if(response[i].sender_name !== ctrl.name  && response[i].recipient_read === false) {
          ctrl.newMessage = true;
          return ctrl.newMessage;
        }
      }
    });


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
