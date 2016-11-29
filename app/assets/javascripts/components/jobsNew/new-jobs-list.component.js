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
      var ctrl = this;

      ctrl.$onInit = function() {
        console.log('work');
        ctrl.columnSort = "last_name";
        ctrl.reverse = "true";

        ctrl.sortBy = function(columnSort) {
          ctrl.columnSort = columnSort;
          ctrl.reverse = !ctrl.reverse;
        };

      };
    }
})();
