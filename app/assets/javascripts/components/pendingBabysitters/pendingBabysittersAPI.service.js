(function() {
  'use strict';
  angular.module('app').factory('pendingBabysittersAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/sitters/pending").then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      },

      pendingInfo: function(id) {
        return $http.get("/api/v1/sitter/" + id + ".json").then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      },

      deleteSitter: function(id) {
        return $http.patch("/api/v1/sitter/delete/" + id + ".json").then(function(response) {
          return response.data;
        });
      },

      approveSitter: function(id) {
        return $http.patch("/api/v1/sitter/approve/" + id + ".json").then (function(response) {
          return response.data;
        });
      }

    };
  }]);
})();
