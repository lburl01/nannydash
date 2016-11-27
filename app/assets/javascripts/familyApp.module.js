(function() {
  angular.module('familyApp', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('family_dashboard', {
          url: '/',
          controller: 'familyDashboard as dashboard',
          templateUrl: 'family/dashboard.html'
      }).state('new_job_form', {
          url: '/new-job-form',
          controller: 'newJobFormController as jobForm',
          templateUrl: 'family/new-job-form.html'
      }).state('upcoming_jobs', {
          url: '/upcoming-jobs',
          controller: 'upcomingJobsController as upcomingJobs',
          templateUrl: 'family/upcoming-jobs.html'
      }).state('job', {
          url: '/job/:jobId',
          params: {
              jobId: null
          },
          controller: 'jobController as job',
          templateUrl: 'family/job.html'
      }).state('babysitter_list', {
          url: '/babysitter-list',
          controller: 'babysitterListController as babysitters',
          templateUrl: 'family/babysitter-list.html'
      }).state('babysitter_profile', {
          url: '/babysitters/profile/:sitterId',
          params: {
              babysitterParam: null,
              sitterId: null
          },
          templateUrl: 'family/babysitter-profile.html',
          controller: 'familyAppBabysitterProfileController as babysitter'
      }).state('conversations', {
          url: '/conversations',
          controller: 'familyAppConversationController as conversations',
          templateUrl: 'family/conversations.html'
      }).state('messages', {
          url: '/messages/:conversationId',
          templateUrl: 'family/messages.html',
          controller: 'messagesController as messages',
          params: {
              messagesParam: null,
              conversationId: null
          }
      }).state('message', {
          url: '/message/:conversationId',
          templateUrl: 'family/message.html',
          controller: 'messageController as message',
          params: {
              messageParam: null,
              conversationId: null
          }
      }).state('new-message', {
          url: '/new-message',
          templateUrl: 'family/message-new.html',
          controller: 'newMessageController as newMessage',
          params: {
              messageSitterId: null
          }
      });

    }]);
})();
