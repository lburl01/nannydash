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
      ctrl.recipientName = "";
      ctrl.recipientId = "";

      if (ctrl.userId === ctrl.message.recipient_id) {
        ctrl.recipientName = ctrl.message.sender_name;
        ctrl.recipientId = ctrl.message.sender_id;
      } else {
        ctrl.recipientName = ctrl.message.recipient_name;
        ctrl.recipientId= ctrl.message.recipient_id;
      }

    };

    ctrl.reply = function(body, subject) {
      nannyAppAPI.sendMessage(ctrl.recipientId, subject, body);
    };

    ctrl.clearText = function() {
      ctrl.body = "";
      console.log('cleared');
    };

  }
})();
