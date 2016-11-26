(function() {
  'use strict';

  angular.module('nannyApp').component('conversation', {
    templateUrl: 'nanny/nanny-conversation.html',
    bindings: {
      messages: '<'
    },
    controller: ['nannyAppAPI', NannyConversation]
  });
  function NannyConversation(nannyAppAPI) {
    var ctrl = this;
    ctrl.length = Object.keys(ctrl.messages).length;
  }
})();
