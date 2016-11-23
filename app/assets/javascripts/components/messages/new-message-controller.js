angular.module('app')
    .controller('newMessageController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.nannys = [];
      this.parents = [];

      dashboardAPI.activeBabysitters().success(function(response) {
          for(var i = 0; i <= response.length; i++) {
            if(response[i].role === 'nanny') {
              return self.nannys.push(response[i]);
            } else if(response[i].role === 'family') {
              return self.parents.push(response[i]);
            }
          };
      });

      this.sendMessage = function(recipient, subject, body) {
        console.log(recipient, subject, body);
      }

      this.loadBabysitters = function() {

      }

    }]);
