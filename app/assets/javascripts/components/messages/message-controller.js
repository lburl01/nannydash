angular.module('app')
    .controller('messageController', ["$scope", "$http", "$state", "$stateParams", "dashboardAPI", function ($scope, $http, $state, $stateParams, dashboardAPI) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.message = $stateParams.messageParam.message;
      this.replyShow = false;
    }]);
