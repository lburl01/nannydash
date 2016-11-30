(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('nannyProfile', {
    bindings: {
      nanny: '<'
    },
    templateUrl: 'nanny/nanny-profile.html',
    controller: ['nannyApp', '$http', '$state', NannyProfile]
  });

  function NannyProfile(nannyApp, $http, $state) {
    var ctrl = this;
    ctrl.file = "";
    ctrl.updateNanny = {};

    ctrl.$onInit = function() {
      ctrl.id = ctrl.nanny.id;
    };

    ctrl.submitImage = function() {
      var data = new FormData(document.getElementById("imageUploadForm"));
      $.ajax({
        url: "/api/v1/sitter",
        data: data,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function() {
          $state.reload();
        }
      });
    };


    ctrl.getSitter = function() {
      ctrl.nanny = nannyApp.user(ctrl.id);
    };

    ctrl.updateCurrent = function(key, value) {
      ctrl.updateNanny[key] = value;
      ctrl.savedText = false;
    };

    ctrl.save = function() {
      nannyApp.updateUser(ctrl.id, ctrl.updateNanny).then(function() {
        ctrl.savedText = true;
        console.log('profile info saved');
      });
    };
  }
})();
