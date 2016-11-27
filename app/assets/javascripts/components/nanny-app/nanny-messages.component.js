(function() {
  'use strict';

  angular.module('nannyApp').component('conversation', {
    templateUrl: 'nanny/nanny-messages.html',
    bindings: {
      messages: '<'
    },
    controller: ['nannyAppAPI', NannyConversation]
  });
  function NannyConversation(nannyAppAPI) {
    var ctrl = this;
    ctrl.length = Object.keys(ctrl.messages).length;

    ctrl.delete = function(messageId, $event) {
      nannyAppAPI.deleteMessage(messageId);
      $event.stopPropagation();
      console.log(ctrl.messages);
      delete ctrl.messages[messageId];
    };

  }
})();
