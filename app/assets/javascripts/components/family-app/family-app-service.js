angular.module('familyApp').service('familyAppAPI', ['$http', '$window', function($http, $window) {

    return {
      list: function() {
        return $http({
          url: "family_dash/5_confirmed_jobs",
          method: "GET"
        });
      },
      deleteUser: function() {
        return $http.delete("/users/sign_out").then(function() {
          $window.location.href = '/home';
        }, function() {
          console.log('Failed to sign out');
        });
      },
      jobDetails: function(id) {
        return $http({
          url: "/api/v1/job/" + id,
          method: "GET"
        });
      },
      user: function() {
        return $http({
          url: "/user/logged_in",
          method: "GET"
        });
      },
      counts: function() {
        return $http({
          url: "/family_dash/counts",
          method: "GET"
        });
      },
      userProfile: function(id) {
        return $http({
          url: "/api/v1/sitter/" + id,
          method: "GET"
        });
      },
      message: function(conversationId, messageId) {
        console.log(conversationId);
        console.log(messageId);
        return $http({
          url: "/conversations/" + conversationId + "/messages/" + parseInt(messageId),
          method: "GET",
          params: {
            messageId: messageId,
            conversationId: conversationId
          }
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
          method: "GET",
          params: {
            conversationId: id,
          }
        });
      },
      reply: function(data) {
        return $http({
          url: "/messages/new",
          method: "POST",
          data: data
        });
      },
      deleteMessage: function(data) {
        return $http({
          url: "/message/delete.json",
          method: "PATCH",
          data: data
        });
      },
      newJob: function(data) {
        console.log(data);
        return $http({
          url: "/job/new.json",
          method: "POST",
          data: data
        });
      },
      pendingJobs: function() {
        return $http({
          url: "/family_dash/pending_jobs",
          method: "GET"
        });
      },
      confirmedJobs: function() {
        return $http({
          url: "/family_dash/confirmed_jobs",
          method: "GET"
        });
      },
      allJobs: function() {
        return $http({
          url: "/family_dash/all_family_jobs",
          method: "GET"
        });
      },
      activeBabysitters: function() {
        return $http({
          url: "/users/all_active",
          method: "GET"
        });
      },
      babysitters: function() {
        return $http({
          url: "/api/v1/sitters",
          method: "GET"
        });
      },
      cpr: function(id) {
        return $http({
          url: "/api/v1/sitter/cpr/" + id + ".json",
          method: "PATCH"
        });
      },
      first_aid: function(id) {
        return $http({
          url: "/api/v1/sitter/first_aid/" + id + ".json",
          method: "PATCH"
        });
      },
      confirmJob: function(id) {
        return $http({
          url: "api/v1/job/confirm/" + id.id + ".json",
          method: "PATCH",
          data: id
        });
      }
    };
  }]);
