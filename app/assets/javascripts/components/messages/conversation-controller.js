angular.module('app')
    .controller('conversationController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/

      var self = this;
      this.messageTrue = $stateParams.newMessage;

      dashboardAPI.user().success(function(response) {
        self.user = response.first_name + ' ' + response.last_name;
      });

      this.messageClick = function() {
        $state.go('new-message');
      };

      dashboardAPI.conversationMessages().success(function(response) {
        self.convLength = response.length;
        self.conversation = response;
      });

      this.ifRead = function(message, data) {
        if(message.sender_name != self.user && data === false) {
          return message['star'] = true;
        }
      };

      this.conversationClick = function(id) {
        dashboardAPI.allMessages(id).success(function(response) {
          $state.go('messages', {
              conversationId: id
            },
            {
              reload: true
            });
        });
      };

    }]);
