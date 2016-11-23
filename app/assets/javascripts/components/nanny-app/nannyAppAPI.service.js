(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', function($http) {
    return {

      jobList: function() {
        return $http.get("api/v1/jobs/new.json").then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      },
      jobInfo: function(id) {
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
      countyList: function() {
        return $http.get('api/v1/families').then(function(response) {
          return response.data.counties;
        }, function() {
          console.log("Failed to get counties");
        });
      },
      familyList: function() {
        return $http.get('api/v1/families').then(function(response) {
          return response.data.families;
        }, function() {
          console.log("Failed to get families");
        });
      },
      singleFamily: function(id) {
        return $http.get('api/v1/family/' + id + '.json').then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          console.log("Failed to return selected family");
        });
      }


    };
  }]);
})();