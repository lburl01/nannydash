(function() {
  'use strict';
  angular.module('nannyApp').component('message', {
    templateUrl: 'nanny/nanny-message.html',
    bindings: {
      message: '<'
    },
    controller: ['nannyAppAPI', NannyMessage]
  });
  function NannyMessage(nannyAppAPI) {
    var ctrl = this;

    ctrl.reply = function(id, body, subject) {
      console.log(id + ' ' + body + ' ' + subject);
      // nannyAppAPI.sendMessage(id, body, subject);
    };
  }
})();
