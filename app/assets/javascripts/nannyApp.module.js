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
            return nannyAppAPI.jobList("api/v1/jobs/new.json");
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
        component: 'upcomingJobsList',
        resolve: {
          newJob: ['nannyAppAPI', function(nannyAppAPI) {
            return nannyAppAPI.jobList("sitter_dash/scheduled_jobs.json");
          }]
        }
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
      }).state('conversations', {
        url: '/conversations',
        component: 'conversations',
        resolve: {
          conversation: ['nannyAppAPI', function(nannyAppAPI) {
            return nannyAppAPI.conversationList();
          }]
        }
      }).state('conversation', {
        url: '/conversation/:convoId',
        component: 'conversation',
        resolve: {
          messages: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            return nannyAppAPI.messageList($stateParams.convoId);
          }]
        }
      }).state('message', {
        url: '/conversation/:convoId/messages/:messageId',
        component: 'message',
        resolve: {
          message: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            console.log($stateParams);
            return nannyAppAPI.messageDetails($stateParams.convoId, $stateParams.messageId);
          }]
        }
      });
    }]);
})();
