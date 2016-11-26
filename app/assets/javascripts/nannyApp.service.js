(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyApp', ['$http', '$window', function($http, $window) {

    return {

      user: function() {
        return $http.get("/user/logged_in.json").then(function(response) {
          console.log(response.data);
          return response.data;
        });
      },

      deleteUser: function() {
        return $http.delete("/users/sign_out").then(function() {
          $window.location.href = '/home';
          console.log('Signed Out of Nanny App!');
        }, function() {
          console.log('Failed to sign out');
        });
      },

      totalCount: function() {
        return $http.get("sitter_dash/counts.json").then(function(response) {
          return response.data;
        }, function() {
          console.log('Failed - Count Totals');
        });
      }

    };
  }]);
})();
