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
    controller: ['nannyAppAPI', NannyConversations]
  });

  function NannyConversations() {
    var ctrl = this;

    ctrl.recipient = function(message) {
      return message.sender_id === ctrl.parent.user.id ? message.recipient_name : message.sender_name;
    };

  }
})();
