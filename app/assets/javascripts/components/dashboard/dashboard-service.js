angular.module('app').service('dashboardAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http({
          url: "/api/v1/agency/summary",
          method: "GET"
        });
      },
      pendingApps: function(id) {
        return $http({
          url: "/api/v1/agency/application/" + id,
          method: "GET"
        });
      },
      jobDetails: function(id) {
        return $http({
          url: "/api/v1/job/" + id,
          method: "GET"
        });
      }
    };
  }]);
