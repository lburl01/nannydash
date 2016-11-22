angular.module('app')
    .controller('conversationController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.count;

      this.messageClick = function() {
        $state.go('new-message');
      }

      dashboardAPI.conversationMessages().success(function(response) {
        //console.log(response);
        self.conversation = response;
      });

      this.messageCount = function(id) {
        dashboardAPI.allMessages(id).success(function(response) {
          console.log(response.length);
          self.count = response.length;
          //self.count;
        });
      }

      this.conversationClick = function(id) {
        dashboardAPI.allMessages(id).success(function(response) {
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
