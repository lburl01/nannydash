angular.module('app')
  .service(function('babysitterDirAPI', $http) {
    return {
      list: function() {
        return $http({
          url: "/api/v1/sitters",
          method: "GET"
        })
      }
    }
  })
