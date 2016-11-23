(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', function($http) {
    return {

      list: function() {
        return $http.get("api/v1/jobs/new.json").then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      },
      info: function(id) {
        return $http.get('api/v1/job/' + id + '.json').then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          alert("Failed to that specific job");
        });
      },
      toggleAssign: function(id) {
        return $http.patch('api/v1/job/assign/' + id + '.json').then(function(response) {
          return response.data;
        }, function() {
          console.log("Assignment was unsuccessful");
        });
      },
      familyList: function() {
        return $http.get('api/v1/families').then(function(response) {
          console.log(response.data.families);
          return response.data.families;
        }, function() {
          console.log("Failed to get families");
        });
      },
      countyList: function() {
        return $http.get('api/v1/families').then(function(response) {
          console.log(response.data.counties);
          return response.data.counties;
        }, function() {
          console.log("Failed to get counties");
        });
      }


    };
  }]);
})();
