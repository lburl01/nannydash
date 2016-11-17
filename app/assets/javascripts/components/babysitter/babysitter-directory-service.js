angular.module('app').service('babysitterDirectoryAPI', ['$http', function($http) {
    this.totalBabysitters = [];

    return {
      list: function() {
        return $http({
          url: "/api/v1/sitters",
          method: "GET"
        });
      },
      userProfile: function(id) {
        return $http({
          url: "/api/v1/sitter/" + id,
          method: "GET"
        });
      },
      updateUser: function(id, data) {
        return $http({
          method: 'PATCH',
          url: "/api/v1/sitter/" + id,
          data: {user: data}
        });
      },
      profileInfo: function(id) {
        return $http.get("/api/v1/sitter/" + id + ".json").then(function(response) {
          return response.data;
        }, function() {
          alert('Failed');
        });
      },
      deleteUser: function(id, data) {
        return $http({
          method: 'PATCH',
          url: "/api/v1/sitter/delete/" + id,
          data: {user: data}
        });
      }
    };
  }]);
