angular.module('app').service('babysitterDirectoryAPI', ['$http', function($http) {
    this.totalBabysitters = [];

    return {
      list: function() {
        return $http({
          url: "/api/v1/sitters",
          method: "GET"
        });
      },
      cpr: function(id) {
        return $http({
          url: "/api/v1/sitter/cpr/" + id + ".json",
          method: "PATCH",
          data: {'id': id}
        });
      },
      first_aid: function(id) {
        return $http({
          url: "/api/v1/sitter/first_aid/" + id + ".json",
          method: "PATCH",
          data: {'id': id}
        });
      },
      userProfile: function(id) {
        return $http({
          url: "/api/v1/sitter/" + id,
          method: "GET"
        });
      },
      updateUser: function(data) {
        return $http({
          method: 'PATCH',
          url: "/api/v1/sitter.json",
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
      deleteUser: function(data) {
        return $http({
          method: 'PATCH',
          url: "/api/v1/sitter/delete/" + data.id + ".json",
          data: data
        });
      }
    };
  }]);
