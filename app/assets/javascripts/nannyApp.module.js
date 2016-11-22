(function() {
  angular.module('nannyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state("nanny_dashboard", {
        url: '/',
        component: 'nannyDashboard'
      }).state('upcomingJobs', {
        url: '/upcoming-jobs',
        component: 'upcomingJobsList'
      }).state('newNannyJobs', {
        url: '/new-jobs',
        component: 'newNannyJobsList'
      }).state('parentDirectory', {
        url: '/parents',
        component: 'parentList'
      }).state('messaging', {
        url: '/messaging',
        component: 'nannyMessages'
      });
    }]);
})();
