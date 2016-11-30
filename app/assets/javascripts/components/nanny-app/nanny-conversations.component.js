(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('conversations', {
    templateUrl: 'nanny/nanny-conversations.html',
    bindings: {
      conversation: '<'
    },
    require: {
      parent: '^nannyApp'
    },
    controller: ['nannyAppAPI', '$stateParams', NannyConversations]
  });

  function NannyConversations(nannyAppAPI, $stateParams) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.user = ctrl.parent.user;
      ctrl.userName = ctrl.user.first_name + ' ' + ctrl.user.last_name;
    };
    ctrl.messageTrue = $stateParams.newMessage;

    ctrl.recipient = function(message) {
      return message.sender_id === ctrl.parent.user.id ? message.recipient_name : message.sender_name;
    };

    ctrl.ifRead = function(message, data) {
      if (message.sender_name !== ctrl.userName && data === false) {
        message.star = true;
        return message.star;
      }
    };

  }
})();
