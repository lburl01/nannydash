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
        console.log(response);
        for(var i = 0; i < response.length; i++) {
          if(response[i].role === 'nanny') {
            nannysArray.push(response[i]);
          } else if(response[i].role === 'family') {
            parentsArray.push(response[i]);
          }
        };
        self.nannys = nannysArray;
        self.parents = parentsArray;

      });

      this.sendMessage = function(id, subject, body) {
        var newMsg = {};
        newMsg['id'] = id;
        newMsg['subject'] = subject;
        newMsg['body'] = body;
        newMsg['conversation_id'] = null;

        console.log(newMsg);
        dashboardAPI.reply(newMsg);
      }

      this.loadUser = function(user) {
        console.log(user);
        self.showUsers = false;
        self.id = user.id
        return self.recipient = user.name;
      }

    }]);
