angular.module('familyApp')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "familyAppAPI", function ($scope, $http, $state, $stateParams, familyAppAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.conversationMessage;
      this.convoId = $stateParams.conversationId;

      familyAppAPI.allMessages(self.convoId).success(function(response) {
        self.conversationMessage = response
      });

      this.recipient = function() {
        var count = 0;
        var i;

        for (i in self.conversationMessage) {
            if(self.conversationMessage.hasOwnProperty(i)) {
              if(self.conversationMessage[i].recipient_name != 'Agency Manager') {
                return self.convoWith = self.conversationMessage[i].sender_name
              } else if(self.conversationMessage[i].sender_name != 'Agency Manager') {
                return self.convoWith = self.conversationMessage[i].recipient_name
              }
              count++;
            }
        }
      }
      this.recipient();

      this.messageClick = function() {
        $state.go('new-message');
      }

      this.readValidate = function(value) {
        if(value.is_read === true) {
          value.read = 'Yes';
        } else if(value.is_read === false) {
          value.read = 'No';
        }
      }

      this.delete = function(e, message) {
        e.stopPropagation();
        var deleteObj = {};
        deleteObj['id'] = message.message_id;
        familyAppAPI.deleteMessage(deleteObj);
        $state.go('messages', {reload:true});
      }

      this.messagesClick = function(object, key) {
        var conversationId = object.conversation_id;
        familyAppAPI.message(conversationId, key).success(function(response) {
          $state.go('message', {messageId: response.message_id, conversationMessId: response.conversation_id}, {reload: true});
        });
      }


    }]);
