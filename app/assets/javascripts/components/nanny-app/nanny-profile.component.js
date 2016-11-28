(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('nannyProfile', {
    bindings: {
      nanny: '<'
    },
    templateUrl: 'nanny/nanny-profile.html',
    controller: ['nannyApp', '$http', NannyProfile]
  });

  function NannyProfile(nannyApp, $http) {
    var ctrl = this;
    ctrl.file = "";
    ctrl.updateNanny = {};

    ctrl.$onInit = function() {
      ctrl.id = ctrl.nanny.id;
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
