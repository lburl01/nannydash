(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('newNannyJobInfo', {
    bindings: {
      jobInfo: '<'
    },
    templateUrl: 'nanny/new-nanny-job-info.html',
    controller: ['nannyAppAPI', NewNannyJobInfo]
  });

  function NewNannyJobInfo(nannyAppAPI) {
    var ctrl = this;
    ctrl.visibility = false;


    ctrl.popup = function() {
      ctrl.visibility = !ctrl.visibility;
    };

    ctrl.assign = function(id) {
      nannyAppAPI.toggleAssign(id);
      ctrl.visibility = false;
    };

  }
})();
