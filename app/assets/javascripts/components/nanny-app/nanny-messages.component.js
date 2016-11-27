(function() {
  'use strict';

  angular.module('nannyApp').component('conversation', {
    templateUrl: 'nanny/nanny-messages.html',
    bindings: {
      messages: '<',
      recipient: '<'
    },
    controller: ['nannyAppAPI', NannyConversation]
  });

  function NannyConversation(nannyAppAPI) {
    var ctrl = this;
    ctrl.length = Object.keys(ctrl.messages).length;

    ctrl.$onInit = function() {
      console.log(ctrl.messages);
    };

    ctrl.delete = function(messageId, $event) {
      nannyAppAPI.deleteMessage(messageId);
      $event.stopPropagation();
      delete ctrl.messages[messageId];
    };

  }
})();
