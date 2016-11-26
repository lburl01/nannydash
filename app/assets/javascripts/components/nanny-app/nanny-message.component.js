(function() {
  'use strict';
  angular.module('nannyApp').component('message', {
    templateUrl: 'nanny/nanny-message.html',
    bindings: {
      message: '<'
    },
    require: {
      parent: "^nannyApp"
    },
    controller: ['nannyAppAPI', NannyMessage]
  });
  function NannyMessage(nannyAppAPI) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.userId = ctrl.parent.userId;
    };

    ctrl.reply = function(recipientId, senderId, body, subject) {
      var id = "";
      console.log(recipientId + ' ' + senderId + ' ' + body + ' ' + subject);
      if (ctrl.userId === recipientId) {
        id = senderId;
      } else {
        id = recipientId;
      }
      nannyAppAPI.sendMessage(id, body, subject);
    };

  }
})();
