(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http({
          url: "http://localhost:3000/agency/families",
          method: "GET"
        });
      }
    };

  }]);
})();
