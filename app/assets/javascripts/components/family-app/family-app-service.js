angular.module('familyApp').service('familyAppAPI', ['$http', function($http) {

    return {
      jobDetails: function(id) {
        return $http({
          url: "/api/v1/job/" + id,
          method: "GET"
        });
      },
      message: function(conversationId, messageId) {
        console.log(conversationId, parseInt(messageId));
        return $http({
          url: "/conversations/" + conversationId + "/messages/" + parseInt(messageId),
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
        return $http({
          url: "/messages/new",
          method: "POST",
          data: data
        });
      },
      deleteMessage: function(id, data) {
        return $http({
          url: "/message/delete/" + id,
          method: "PATCH",
          data: data
        });
      },
      newJob: function(data) {
        return $http({
          url: "/job/new",
          method: "POST",
          data: data
        });
      },
      activeBabysitters: function() {
        return $http({
          url: "/users/all_active",
          method: "GET"
        });
      }
    };
  }]);
