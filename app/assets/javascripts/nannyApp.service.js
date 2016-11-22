(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', function($http){
    return {

      signOut: function() {
        console.log('Signed Out');
        // return $http.delete("/users/sign_out").then(function() {
        //   console.log('Signed Out!');
        // }, function() {
        //   alert('Failed to sign out.');
        // });
      }

    };
  }]);
})();
