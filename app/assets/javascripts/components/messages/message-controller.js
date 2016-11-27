angular.module('app')
    .controller('messageController', ['$http', '$state', '$stateParams', 'dashboardAPI', function ($http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.messageId = $stateParams.messageParam.message.message_id;
      this.messageConvoId = $stateParams.messageParam.message.conversation_id;
      this.replyShow = false;
      this.message;
      this.sentMsg = false;

      dashboardAPI.message(self.messageConvoId, self.messageId).success(function(response) {
          return self.message = response;
      });

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

        $('.text-body').html('');
        dashboardAPI.reply(replyObject);
        self.replyShow = false;
        self.sentMsg = !self.sentMsg;
      }

      this.deleteBtn = function() {
        $('.reply').find('.text-body').text('');
        this.replyShow = false;
      }

    }]);
