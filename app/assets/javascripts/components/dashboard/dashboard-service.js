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
      },
      message: function(conversationId, messageId) {
        return $http({
          url: "/conversations/" + conversationId + "/messages/" + messageId,
          method: "GET"
        });
      },
      conversationMessages: function() {
        return $http({
          url: "/conversations",
          method: "GET"
        });
      },
      allMessages: function(id) {
        return $http({
          url: "/conversations/"+ id +"/messages",
          method: "GET"
        });
      },
      reply: function(data) {
        console.log(data);
        return $http({
          url: "/messages/new",
          method: "POST",
          data: data
        });
      }
    };
  }]);
