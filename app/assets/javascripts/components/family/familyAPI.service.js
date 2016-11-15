(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http.get("/agency/families.json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },
      toggleActiveState: function(id) {
        return $http.patch("/api/v1/family/" + id);
      }
    };

  }]);
})();
