(function() {
  'use strict';

  angular.module('nannyApp').component('newMessage', {
    templateUrl: 'nanny/nanny-new-message.html',
    bindings: {
      parent: '<',
      newMessage: '<'
    },
    controller: ['nannyAppAPI', '$state', '$stateParams', NannyNewMessageController]
  });

  function NannyNewMessageController(nannyAppAPI, $state, $stateParams) {
    var ctrl = this;
    ctrl.showUsers = false;
    ctrl.recipient = "";
    ctrl.recipientId = "";

    ctrl.$onInit = function() {
      ctrl.nannyList = [];
      ctrl.parentList = [];

      if($stateParams.newMessage != null) {
        nannyAppAPI.singleFamily($stateParams.newMessage).then(function(response) {
          ctrl.recipientId = response.family_id;
          ctrl.recipient = response.first_name + ' ' + response.last_name;
        });
      }

      nannyAppAPI.activeUsers().then(function(response) {
        response.forEach(function(user) {
          if (user.role === "nanny") {
            ctrl.nannyList.push(user);
          } else if (user.role === "family") {
            ctrl.parentList.push(user);
          }
        });
      });
    };

    ctrl.selectRecipient = function(user) {
      ctrl.showUsers = false;
      ctrl.recipient = user.name;
      ctrl.recipientId = user.id;
    };

    ctrl.send = function(recipientId, subject, body) {
      nannyAppAPI.sendMessage(recipientId, subject, body);
      console.log('sent!');
      $state.go('conversations', {newMessage: true});
    };

  }
})();
