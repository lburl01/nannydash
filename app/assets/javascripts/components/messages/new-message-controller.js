angular.module('app')
    .controller('newMessageController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;

      this.sendMessage = function(recipient, subject, body) {
        console.log(recipient, subject, body);
      }

      this.loadBabysitters = function() {
        dashboardAPI.activeBabysitters().success(function(response) {
            console.log(response);
        });
      }

    }]);
