(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {
    var basePath = "http://localhost:3000";

    return {
      list: function() {
        return $http.get(basePath + "/agency/families.json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },
      toggleActiveState: function(id) {
        return $http.patch(basePath + "/api/v1/family/" + id);
      }
    };

  }]);
})();
