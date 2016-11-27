angular.module('familyApp')
    .controller('messageController', ['$http', '$state', '$stateParams', 'familyAppAPI', function ($http, $state, $stateParams, familyAppAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.messageId = $stateParams.messageParam.message.message_id;
      this.messageConvoId = $stateParams.messageParam.message.conversation_id;
      this.replyShow = false;
      this.message;
      this.sentMsg = false;

      familyAppAPI.message(self.messageConvoId, self.messageId).success(function(response) {
        console.log(response);
          return self.message = response;
      });

      this.backToMessages = function(id) {
        familyAppAPI.allMessages(id).success(function(response) {
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
        familyAppAPI.reply(replyObject);
        self.replyShow = false;
        self.sentMsg = !self.sentMsg;
      }
      //
      this.deleteBtn = function() {
        $('.reply').find('.text-body').text('');
        this.replyShow = false;
      }

    }]);
