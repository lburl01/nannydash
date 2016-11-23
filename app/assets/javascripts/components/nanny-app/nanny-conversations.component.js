(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('conversations', {
    templateUrl: 'nanny/nanny-conversations.html',
    bindings: {
      conversation: '<'
    },
    controller: ['nannyAppAPI', NannyConversations]
  });

  function NannyConversations() {

  }
})();
