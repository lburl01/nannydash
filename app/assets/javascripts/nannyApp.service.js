(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', '$location', function($http, $location){
    return {

      // signOut: function() {
      //   console.log('Signed Out');
      //   return $http.delete("/users/sign_out").then(function() {
      //     $location.path('/home');
      //
      //     console.log('Signed Out!');
      //   }, function() {
      //     alert('Failed to sign out.');
      //   });
      // }

    };
  }]);
})();
