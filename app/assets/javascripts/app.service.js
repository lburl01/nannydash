(function() {
  'use strict';
  angular.module('app').factory('appAPI', ['$http', '$state', '$location', 'dashboardAPI', function($http, $state, $location, dashboardAPI){
    this.newMessage = dashboardAPI.get();
    console.log(this.newMessage);

    return {
      totalCount: function() {
        return $http.get("/api/v1/agency/count_totals").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      }
      //
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
