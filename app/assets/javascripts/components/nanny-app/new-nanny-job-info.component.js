(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('newNannyJobInfo', {
    bindings: {
      jobInfo: '<'
    },
    templateUrl: 'nanny/new-nanny-job-info.html',
    controller: ['nannyAppAPI', '$scope', NewNannyJobInfo]
  });

  function NewNannyJobInfo(nannyAppAPI, $scope) {
    var ctrl = this;
    ctrl.visibility = false;


    ctrl.popup = function() {
      ctrl.visibility = !ctrl.visibility;
    };

    ctrl.assign = function(id) {
      nannyAppAPI.toggleAssign(id).then(function() {
        ctrl.visibility = false;
        ctrl.jobInfo.is_assigned = true;
        $scope.$emit('updateCount', {});
      });
    };

  }
})();
