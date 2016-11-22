(function() {
  'use strict';

  angular
  .module('nannyApp')
  .component('newNannyJobsList', {
    bindings: {
      newJob: '<'
    },
    templateUrl: 'nanny/new-jobs-list.html',
    controller: ['newNannyJobsAPI', NewNannyJobsList]
  });

  function NewNannyJobsList(newNannyJobsAPI) {

  }

})();
