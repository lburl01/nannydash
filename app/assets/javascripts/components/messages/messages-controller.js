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
        $state.go('message', {messageParam: {message: object}, conversationId: object.conversation_id}, {reload: true});

        // dashboardAPI.allMessages(id).success(function(response) {
        //   console.log(response);
        // });
      }
    }]);
