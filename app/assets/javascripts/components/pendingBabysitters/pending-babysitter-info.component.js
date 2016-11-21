(function() {
  angular
  .module('app')
  .component('pendingBabysitterInfo', {
    templateUrl: 'pending-babysitter-info.html',
    bindings: {
      info: '<'
    },
    controller: ['pendingBabysittersAPI', '$scope', '$state', PendingBabysitterInfo]
  });

  function PendingBabysitterInfo(pendingBabysittersAPI, $scope, $state) {
    var ctrl = this;

    ctrl.calculateAge = function(birthday) {
      var ageDifMs = Date.now() - new Date(birthday);
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    ctrl.approve = function(id) {
      pendingBabysittersAPI.approveSitter(id).then(function() {
        $scope.$emit('updateCount', {});
        $state.go('pendingBabysitters');
      });
    };

    ctrl.delete = function(id) {
      pendingBabysittersAPI.deleteSitter(id).then(function() {
        $scope.$emit('updateCount', {});
        $state.go('pendingBabysitters');
      });
    };
  }
})();
