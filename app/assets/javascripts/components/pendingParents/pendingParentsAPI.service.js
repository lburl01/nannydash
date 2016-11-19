(function() {
  'use strict';

  angular.module('app').factory('pendingParentsAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/families/pending").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert('Failed');
        });
      }

    };
  }]);
})();
