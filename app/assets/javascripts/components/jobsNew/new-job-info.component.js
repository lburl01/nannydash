(function() {
  'use strict';
  angular
    .module('app')
    .component('newJobInfo', {
      bindings: {
        jobs: '<'
      },
      templateUrl: 'new-job-info.html',
      controller: ['newJobsAPI', NewJobInfoController]
    });

  function NewJobInfoController(newJobsAPI) {
    var ctrl = this;

    ctrl.$onInit = function() {
      console.log(ctrl.job);
    };
  }
})();
