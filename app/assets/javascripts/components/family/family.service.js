(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http.get("http://localhost:3000/agency/families.json");
      }
    };

  }]);
})();
