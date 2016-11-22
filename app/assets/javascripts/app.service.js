(function() {
  'use strict';
  angular.module('app').factory('appAPI', ['$http', '$state', '$location', function($http, $state, $location){
    return {

      totalCount: function() {
        return $http.get("/api/v1/agency/count_totals").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      // signOut: function() {
      //   return $http.delete("/users/sign_out", {}).then(function() {
      //     console.log('Signed Out!');
      //   }, function() {
      //     $location.path('/home');
      //     alert('Failed to sign out.');
      //   });
      // }

    };
  }]);
})();
