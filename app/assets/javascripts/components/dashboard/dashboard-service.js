angular.module('app').service('dashboardAPI', ['$http', function($http) {

    return {
      list: function() {
        return $http({
          url: "api/v1/agency/summary",
          method: "GET"
        });
      }
    };
  }]);
