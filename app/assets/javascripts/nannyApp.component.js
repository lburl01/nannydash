(function() {
  angular
    .module('nannyApp')
    .component('nannyApp', {
      templateUrl: 'nanny/nanny-app.html',
      controller: ['$http', '$window', nannyAppController]
  });

  function nannyAppController($http, $window) {
    var ctrl = this;

    ctrl.signOut = function() {
      $http.delete("/users/sign_out").then(function() {
        $window.location.href = '/home';

        console.log('Success! Signed out!');
      }, function() {
        alert("Failed to sign out");
      });
    };

  }
})();
