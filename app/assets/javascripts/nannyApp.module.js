(function() {
  angular.module('nannyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination', 'shared'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state("nanny_dashboard", {
        url: '/',
        component: 'nannyDashboard',
        resolve: {
          scheduledJob: ['nannyApp', function(nannyApp) {
            return nannyApp.dashScheduledJobList();
          }],
          requestedJob: ['nannyApp', function(nannyApp) {
            return nannyApp.dashRequestedJobList();
          }]
        }
      }).state('nannyProfile', {
        url: '/profile/:nannyId',
        component: 'nannyProfile',
        resolve: {
          nanny: ['nannyApp', '$stateParams', function(nannyApp, $stateParams) {
            return nannyApp.user($stateParams.nannyId);
          }]
        }
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
      }).state('upcomingJobInfo', {
        url: '/upcoming-job/:jobId',
        component: 'upcomingJobInfo',
        resolve: {
          jobInfo: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            return nannyAppAPI.jobInfo($stateParams.jobId);
          }]
        }
      }).state('parentDirectory', {
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
        url: '/conversation/:convoId?recipient',
        component: 'conversation',
        resolve: {
          messages: ['nannyAppAPI', '$stateParams', function(nannyAppAPI, $stateParams) {
            return nannyAppAPI.messageList($stateParams.convoId);
          }],
          recipient: ['$stateParams', function($stateParams) {
            return $stateParams.recipient;
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
      }).state('newMessage', {
        url: '/message/new',
        component: 'newMessage'
      });
    }]);
})();
