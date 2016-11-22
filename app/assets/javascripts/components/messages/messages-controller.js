angular.module('app')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.conversationMessage = $stateParams.messagesParam.messages;

      this.messageClick = function() {
        $state.go('new-message');
      }

      dashboardAPI.conversationMessages().success(function(response) {
        self.conversation = response;
      });

      this.messagesClick = function(object) {
        console.log(object);
        var conversationId = object.conversation_id;
        var messageId = object.message_id;
        dashboardAPI.message(conversationId, messageId).success(function(response) {
          console.log(response);
          $state.go('message', {messageParam: {message: response}, conversationId: conversationId}, {reload: true});
        });
      }
    }]);
