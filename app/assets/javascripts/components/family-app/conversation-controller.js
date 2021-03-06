angular.module('familyApp')
    .controller('familyAppConversationController', ["$scope", "$http", "$state", "$stateParams", "familyAppAPI", function ($scope, $http, $state, $stateParams, familyAppAPI) {
      /*************************
      Variables
      *************************/
      var self = this;

      familyAppAPI.user().success(function(response) {
        self.user = response.id
      })

      this.messageTrue = $stateParams.newMessage;

      this.messageClick = function() {
        $state.go('new-message');
      }

      familyAppAPI.conversationMessages().success(function(response) {
        self.convLength = response.length;
        self.conversation = response;
      });

      this.conversationClick = function(id) {
        familyAppAPI.allMessages(id).success(function(response) {
          $state.go('messages', {
            messagesParam: {
              messages: response
            },
              conversationId: id
            },
            {
              reload: true
            });
        });
      }

    }]);
