angular.module('app')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.conversationMessage = $stateParams.messagesParam.messages;
      this.convoId = this.conversationMessage.conversation_id
      console.log(this.conversationMessage);

      this.messageClick = function() {
        $state.go('new-message');
      }

      dashboardAPI.allMessages(self.convoId).success(function(response) {
        console.log(response);
        // self.readValidate(response.is_read)
        // self.conversation = response;
      });

      this.readValidate = function(value) {
        if(value === true) {
          return value = 'Yes';
        } else {
          return value = 'No';
        }
      }

      this.delete = function(e, message) {
        e.stopPropagation();
        dashboardAPI.deleteMessage(message.message_id, message);
        //$state.go('babysitters',{reload: true});
        dashboardAPI.allMessages(self.conversations.convo_id).success(function(response) {
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

      this.messagesClick = function(object) {
        var conversationId = object.conversation_id;
        var messageId = object.message_id;
        dashboardAPI.message(conversationId, messageId).success(function(response) {
          console.log('Conversations/Messages');
          console.log(response);
          $state.go('message', {messageParam: {message: response}, conversationId: conversationId}, {reload: true});
        });
      }
    }]);
