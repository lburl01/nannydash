(function() {
  angular
  .module('app')
  .component('pendingBabysitterInfo', {
    templateUrl: 'pending-babysitter-info.html',
    bindings: {
      info: '<'
    },
    controller: ['pendingBabysittersAPI', PendingBabysitterInfo]
  });

  function PendingBabysitterInfo(pendingBabysittersAPI) {
    var ctrl = this;

    ctrl.calculateAge = function(birthday) {
      var ageDifMs = Date.now() - new Date(birthday);
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    
  }
})();
