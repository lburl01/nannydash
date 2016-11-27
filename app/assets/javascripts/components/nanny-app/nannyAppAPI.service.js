(function() {
  'use strict';
  angular.module('nannyApp').factory('nannyAppAPI', ['$http', function($http) {
    return {

      jobList: function(url) {
        return $http.get(url).then(function(response) {
          return response.data;
        }, function() {
          alert("Failed");
        });
      },
      jobInfo: function(id) {
        return $http.get('/api/v1/job/' + id + '.json').then(function(response) {
          return response.data;
        }, function() {
          alert("Failed to that specific job");
        });
      },
      toggleAssign: function(id) {
        return $http.patch('/api/v1/job/assign.json', {id: id}).then(function(response) {
          return response.data;
        }, function() {
          console.log("Assignment was unsuccessful");
        });
      },
      countyList: function() {
        return $http.get('/api/v1/families').then(function(response) {
          return response.data.counties;
        }, function() {
          console.log("Failed to get counties");
        });
      },
      familyList: function() {
        return $http.get('/api/v1/families').then(function(response) {
          return response.data.families;
        }, function() {
          console.log("Failed to get families");
        });
      },
      singleFamily: function(id) {
        return $http.get('/api/v1/family/' + id + '.json').then(function(response) {
          return response.data;
        }, function() {
          console.log("Failed to return selected family");
        });
      },
      conversationList: function() {
        return $http.get('/conversations.json').then(function(response) {
          return response.data;
        }, function() {
          console.log('Failed to return list of conversations');
        });
      },
      messageList: function(id) {
        return $http.get('/conversations/' + id + '/messages.json').then(function(response) {
          return response.data;
        }, function() {
          console.log('Failed to return the messages inside of conversation');
        });
      },
      messageDetails: function(convoId, messageId) {
        return $http.get('/conversations/' + convoId + '/messages/' + messageId + '.json').then(function(response) {
          console.log(response.data);
          return response.data;
        }, function() {
          console.log('Failed to return message details');
        });
      },
      deleteMessage: function(id) {
        return $http.patch('/message/delete.json', {id: id}).then(function() {
          console.log("Message deleted successfully!");
        }, function() {
          console.log("Failed to delete message");
        });
      },
      sendMessage: function(id, subject, body) {
        console.log(subject + ': ' + body);
        return $http.post('/messages/new.json',
        {
          id: id,
          subject: subject,
          body: body
        }, function() {
          console.log("Failed to post message");
        });
      },
      activeUsers: function() {
        return $http.get('/users/all_active.json').then(function(response) {
          return response.data;
        }, function() {
          console.log('Failed to get active users');
        });
      }
    };
  }]);
})();
