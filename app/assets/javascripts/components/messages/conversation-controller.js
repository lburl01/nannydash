angular.module('app')
    .controller('conversationController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;

      this.messageClick = function() {
        $state.go('new-message');
      }

      dashboardAPI.conversationMessages().success(function(response) {
        console.log(response);
        self.convLength = response.length;
        self.conversation = response;
      });

      this.conversationClick = function(id) {
        console.log(id);
        dashboardAPI.allMessages(id).success(function(response) {
          console.log(response);
          $state.go('messages', {
              conversationId: id
            },
            {
              reload: true
            });
        });
      }

    }]);
