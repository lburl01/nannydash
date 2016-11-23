(function() {
  angular.module('nannyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state("nanny_dashboard", {
        url: '/',
        component: 'nannyDashboard'
      }).state('newNannyJobs', {
        url: '/new-jobs',
        component: 'newNannyJobsList',
        resolve: {
          newJob: ['nannyAppAPI', function(nannyAppAPI) {
            return nannyAppAPI.jobList();
          }]
        }
      }).state('newNannyJobInfo', {
        url: '/new-jobs/info/:jobId',
        component: 'newNannyJobInfo',
        resolve: {
          jobInfo: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            return nannyAppAPI.jobInfo($stateParams.jobId);
          }]
        }
      }).state('upcomingJobs', {
        url: '/upcoming-jobs',
        component: 'upcomingJobsList'
      }).state('nannyParentDirectory', {
        url: '/parents',
        component: 'parentList',
        resolve: {
          families: ['nannyAppAPI', function(nannyAppAPI) {
            return nannyAppAPI.familyList();
          }]
        }
      }).state('nannyParentInfo', {
        url: '/parent/:parentId',
        component: 'nannyParentInfo',
        resolve: {
          parent: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            console.log($stateParams);
            return nannyAppAPI.singleFamily($stateParams.parentId);
          }]
        }
      }).state('messaging', {
        url: '/messaging',
        component: 'nannyMessages'
      });
    }]);
})();
