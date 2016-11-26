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
    
  }
})();
