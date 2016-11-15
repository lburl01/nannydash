(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {
    var basePath = "http://localhost:3000";

    return {
      list: function() {
        return $http.get(basePath + "/agency/families.json");
      },
      toggleActiveState: function(id) {
        return $http.patch(basePath + "/api/v1/family/" + id);
      }
    };

  }]);
})();
