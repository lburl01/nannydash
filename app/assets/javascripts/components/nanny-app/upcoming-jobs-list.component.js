(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('upcomingJobsList', {
    templateUrl: 'nanny/upcoming-jobs-list.html',
    bindings: {
      newJob: '<'
    },
    controller: ['nannyAppAPI', UpcomingJobsList]
  });
  function UpcomingJobsList() {

  }
})();
