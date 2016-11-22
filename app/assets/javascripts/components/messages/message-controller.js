angular.module('app')
    .controller('messageController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.message = $stateParams.messageParam.message;
      this.replyShow = false;

      this.backToMessages = function(id) {
        dashboardAPI.allMessages(id).success(function(response) {
          console.log(response);
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

      this.replyMessage = function(body, subject) {
        var replyObject = {};
        replyObject['id'] = self.message.sender_id;
        replyObject['conversation_id'] = self.message.conversation_id;
        replyObject['subject'] = subject;
        replyObject['body'] = body;

        console.log(replyObject);
        dashboardAPI.reply(replyObject);
      }
    }]);
