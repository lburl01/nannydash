(function() {
  'use strict';
  angular.module('app').factory('familyAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http.get("/api/v1/families.json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      toggleActiveState: function(id) {
        return $http.patch("/api/v1/family/" + id + ".json");
      },

      profileInfo: function(id) {
        return $http.get("/api/v1/family/" + id + ".json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },

      saveProfile: function(id, data) {
        console.log('save profile called');
        console.log(id);
        console.log(data);
        return $http.patch("/api/v1/family/update/" + id +".json", {user: data});
      }
    };
  }]);
})();
