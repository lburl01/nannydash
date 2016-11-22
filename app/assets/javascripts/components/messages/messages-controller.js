angular.module('app')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.conversationMessage = $stateParams.messagesParam.messages;
      this.read = true;

      this.messageClick = function() {
        $state.go('new-message');
      }

      dashboardAPI.conversationMessages().success(function(response) {
        console.log(response);
        self.readValidate(self.read)
        self.conversation = response;
      });

      this.readValidate = function(value) {
        if(value === true) {
          self.read = 'Yes';
        }
      }

      this.messagesClick = function(object) {
        var conversationId = object.conversation_id;
        var messageId = object.message_id;
        dashboardAPI.message(conversationId, messageId).success(function(response) {
          console.log(response);
          $state.go('message', {messageParam: {message: response}, conversationId: conversationId}, {reload: true});
        });
      }
    }]);
