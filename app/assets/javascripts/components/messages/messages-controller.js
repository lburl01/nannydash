angular.module('app')
    .controller('messagesController', ["$scope", "$http", "$state", "$stateParams", "babysitterDirectoryAPI", function ($scope, $http, $state, $stateParams, babysitterDirectoryAPI) {
      /*************************
      Variables
      *************************/
      var self = this;

      this.messageClick = function() {
        $state.go('new-message');
      }

    }]);
