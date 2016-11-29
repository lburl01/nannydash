(function() {
  'use strict';
  angular.module('app').factory('pendingBabysittersAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("/api/v1/sitters/pending").then(function(response) {
          return response.data.sitters;
        }, function() {
          alert("Failed");
        });
      },
      countyList: function() {
        return $http.get("/api/v1/sitters/pending.json").then(function(response) {
          return response.data.counties;
        }, function() {
          alert('Failed');
        });
      },
      pendingInfo: function(id) {
        return $http.get("/api/v1/sitter/" + id + ".json").then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert("Failed");
        });
      },

      deleteSitter: function(id) {
        return $http.patch("/api/v1/sitter/delete/" + id + ".json", {id: id}).then(function(response) {
          return response.data;
        });
      },

      approveSitter: function(id) {
        console.log(id);
        return $http.patch("/api/v1/sitter/approve/" + id + ".json", {id: id}).then (function(response) {
          return response.data;
        });
      }

    };
  }]);
})();
