(function() {
  'use strict';
  angular.module('app').factory('appAPI', ['$http', '$state', function($http, $state){
    return {

      totalCount: function() {
        return $http.get("/api/v1/agency/count_totals").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      }

      // signOut: function() {
      //   return $http.delete("/users/sign_out_session").then(function() {
      //     $state.go('home');
      //     console.log('Signed Out!');
      //   }, function() {
      //     alert('Failed to sign out.');
      //   });
      // }

    };
  }]);
})();
