(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', '$window', function($http, $window) {
    return {

      deleteUser: function() {
        return $http.delete("/users/sign_out").then(function() {
          $window.location.href = '/home';
          console.log('Signed Out of Nanny App!');
        }, function() {
          alert('Failed to sign out.');
        });
      }

    };
  }]);
})();
