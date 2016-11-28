(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('upcomingJobInfo', {
    templateUrl: 'nanny/upcoming-job-info.html',
    bindings: {
      jobInfo: '<'
    },
    controller: ['nannyAppAPI', UpcomingJobInfo]
  });

  function UpcomingJobInfo(nannyAppAPI) {
    var ctrl = this;

    ctrl.popup = function() {
      console.log('popup clicked');
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
