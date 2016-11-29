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
    ctrl.assignVisibility = false;
    ctrl.deletedText = false;

    ctrl.$onInit = function() {
      ctrl.nannyList = [];

      newJobsAPI.activeUsers().then(function(response) {
        response.forEach(function(user) {
          if (user.role === "nanny") {
            ctrl.nannyList.push(user);
          }
        });
      });
    };

    ctrl.popup = function() {
      ctrl.visibility = !ctrl.visibility;
    };

    ctrl.assignPopup = function() {
      ctrl.assignVisibility = !ctrl.assignVisibility;
    };

    ctrl.assign = function(user) {
      console.log(user);
      ctrl.nanny = user;

      ctrl.sitterData = {
        id: parseInt(ctrl.jobId),
        sitter_id: ctrl.nanny.id
      };

      console.log(ctrl.sitterData);

      newJobsAPI.assignSitter(ctrl.sitterData).then(function(response) {
        console.log(ctrl.sitterData);
        console.log('yay!');
        ctrl.assignVisibility = false;
      });

    };

    ctrl.updateCurrent = function(key, value) {
      ctrl.updateNewJob[key] = value;
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
