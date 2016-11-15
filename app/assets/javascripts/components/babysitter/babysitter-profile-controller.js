angular.module('app')
    .controller('babysitterProfileController', function ($http, $state, $stateParams) {
      this.user = $stateParams.babysitterParam.sitter;
      console.log(this.user);
      /*************************
      Variables
      *************************/

    });
