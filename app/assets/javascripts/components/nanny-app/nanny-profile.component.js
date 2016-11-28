(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('nannyProfile', {
    bindings: {
      nanny: '<'
    },
    templateUrl: 'nanny/nanny-profile.html',
    controller: ['nannyApp', 'Upload', '$http', NannyProfile]
  });

  function NannyProfile(nannyApp, Upload, $http) {
    var ctrl = this;
    ctrl.file = "";

    ctrl.$onInit = function() {
      ctrl.id = ctrl.nanny.id;
      console.log(ctrl.id);
    };

    ctrl.upload = function() {
      ctrl.image = ctrl.file.name;
      $http.patch("/api/v1/sitter.json", ({user: {picture: ctrl.image}, id: ctrl.id})).then(function() {
        console.log('successful image update');
      }, function() {
        console.log('Failed to update image');
      });
    };

  }
})();
