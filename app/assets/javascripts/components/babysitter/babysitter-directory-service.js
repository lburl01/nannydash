angular.module('app').service('babysitterDirectoryAPI', function($http) {
    return {
      list: function() {
        return $http({
          url: "/api/v1/sitters",
          method: "GET"
        });
      }
    }
  })
