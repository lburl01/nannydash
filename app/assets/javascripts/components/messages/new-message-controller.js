angular.module('app')
    .controller('newMessageController', ["$scope", "$http", "$state", "$stateParams", "babysitterDirectoryAPI", function ($scope, $http, $state, $stateParams, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;

      this.sendMessage = function(subject, body) {
        console.log(subject, body);
      }

    }]);
