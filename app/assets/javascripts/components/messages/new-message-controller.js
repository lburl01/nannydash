angular.module('app')
    .controller('newMessageController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.showUsers = false;

      dashboardAPI.activeBabysitters().success(function(response) {
        var nannysArray = [];
        var parentsArray = [];
        var managerArray = [];
        for(var i = 0; i < response.length; i++) {
          if(response[i].role === 'nanny') {
            nannysArray.push(response[i]);
          } else if(response[i].role === 'family') {
            parentsArray.push(response[i]);
          } else if(response[i].role === 'manager') {
            managerArray.push(response[i]);
          }
        };
        self.nannys = nannysArray;
        self.parents = parentsArray;
        self.manager = managerArray;

      });

      this.sendMessage = function(id, subject, body) {
        var newMsg = {};
        newMsg['id'] = id;
        newMsg['subject'] = subject;
        newMsg['body'] = body;
        newMsg['conversation_id'] = null;

        dashboardAPI.reply(newMsg);
        $state.go('conversations', {newMessage: true});
      };

      this.loadUser = function(user) {
        self.showUsers = false;
        self.id = user.id;
        return self.recipient = user.name;
      };

    }]);
