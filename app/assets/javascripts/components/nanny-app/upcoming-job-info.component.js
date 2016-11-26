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
  function UpcomingJobInfo() {

  }
})();
