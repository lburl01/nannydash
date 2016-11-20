(function() {
  'use strict';
  angular.module('app').factory('pendingBabysittersAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("api/v1/sitters/pending").then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      }

    };
  }]);
})();
