angular.module('app')
    .controller('conversationController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.messageTrue = $stateParams.newMessage;

      this.messageClick = function() {
        $state.go('new-message');
      };

      dashboardAPI.conversationMessages().success(function(response) {
        console.log(response);
        self.convLength = response.length;
        self.conversation = response;
      });

      this.ifRead = function(message, data) {
        if(message.sender_name != "Agency Manager" && data === false) {
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
