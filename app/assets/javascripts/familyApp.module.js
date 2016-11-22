(function() {
  angular.module('familyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $stateProvider.state("family_dashboard", {
        url: '/',
        component: 'familyDashboard'
      });
    }]);
})();
