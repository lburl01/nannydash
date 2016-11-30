(function() {
  'use strict';

  angular.module('nannyApp').component('newMessage', {
    templateUrl: 'nanny/nanny-new-message.html',
    controller: ['nannyAppAPI', '$state', NannyNewMessageController]
  });

  function NannyNewMessageController(nannyAppAPI, $state) {
    var ctrl = this;
    ctrl.showUsers = false;
    ctrl.recipient = "";

    ctrl.$onInit = function() {
      ctrl.nannyList = [];
      ctrl.parentList = [];

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
      ctrl.recipient = user;
    };

    ctrl.send = function(id, subject, body) {
      nannyAppAPI.sendMessage(id, subject, body);
      $state.go('conversations', {newMessage: true});
    };

  }
})();
