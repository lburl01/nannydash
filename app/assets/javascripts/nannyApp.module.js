(function() {
  angular.module('nannyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $stateProvider.state("nanny_dashboard", {
        url: '/',
        component: 'nannyDashboard'
      });
    }]);
})();
