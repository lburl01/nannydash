(function() {
  'use strict';

  angular
    .module('app')
    .component('newJobsList', {
      bindings: {
        jobs: '<',
      },
      templateUrl: 'new-jobs-list.html',
      controller: ['newJobsAPI', NewJobsController]
    });

    function NewJobsController(newJobsAPI) {
    }
})();
