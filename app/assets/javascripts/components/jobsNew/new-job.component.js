(function() {
  'use strict';
  angular
    .module('app')
    .component('newJob', {
      bindings: {
        job: '<'
      },
      templateUrl: 'new-job.html',
      controller: ['newJobsAPI', NewJobController]
    });

  function NewJobController(newJobsAPI) {

  }
})();
