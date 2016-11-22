(function() {
  'use strict';
  angular
    .module('app')
    .component('newJobInfo', {
      bindings: {
        job: '<'
      },
      templateUrl: 'new-job-info.html',
      controller: ['newJobsAPI', '$stateParams', '$scope', '$state', NewJobInfoController]
    });

  function NewJobInfoController(newJobsAPI, $stateParams, $scope, $state) {
    var ctrl = this;
    ctrl.jobId = $stateParams.jobId;
    ctrl.updateNewJob = {};
    ctrl.visibility = false;
    ctrl.deletedText = false;

    ctrl.popup = function() {
      ctrl.visibility = !ctrl.visibility;
    };

    ctrl.$onInit = function() {
    };

    ctrl.updateCurrent = function(key, value) {
      ctrl.updateNewJob[key] = value;
    };

    ctrl.save = function(id) {
      newJobsAPI.saveJob(id, ctrl.updateNewJob).then(function() {
        console.log("Saved: " + ctrl.updateNewJob);
      });
    };

    ctrl.delete = function(id) {
      newJobsAPI.deleteJob(id).then(function() {
        console.log("Deleted: Job ID " + id);
        $scope.$emit('updateCount', {});
        ctrl.deletedText = true;
        $state.go('newJobs');
      });
    };

  }
})();
