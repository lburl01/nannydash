angular.module('app')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.conversationMessage;
      this.convoId = $stateParams.conversationId;
      console.log(this.convoId);

      this.init = function() {
        dashboardAPI.allMessages(self.convoId).success(function(response) {
          self.conversationMessage = response
          self.conversationMessage;
        });
      }
      this.init();

      this.recipient = function() {
        var count = 0;
        var i;

        for (i in self.conversationMessage) {
            if (self.conversationMessage.hasOwnProperty(i)) {
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

      this.delete = function(e, message, key) {
        e.stopPropagation();
        //console.log(message);
        dashboardAPI.deleteMessage(key, message);
        self.init();
        // dashboardAPI.allMessages(self.convoId).success(function(response) {
        //   $state.go('messages', {
        //     messagesParam: {
        //       messages: response
        //     },
        //       conversationId: message.conversation_id
        //     },
        //     {
        //       reload: true
        //     });
        // });
      }

      this.messagesClick = function(object, key) {
        var conversationId = object.conversation_id;
        dashboardAPI.message(conversationId, key).success(function(response) {
          console.log(response);
          $state.go('message', {messageParam: {message: response}, conversationId: response.conversation_id}, {reload: true});
        });
      }

    }]);
