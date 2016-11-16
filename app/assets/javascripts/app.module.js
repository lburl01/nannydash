angular.module('app', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('jobs', {
      url: '/',
      component: 'jobsList'
    }).state('newJobs', {
      url: '/new-jobs',
      component: 'newJobsList'
    }).state('babysitters', {
      url: '/babysitters',
      templateUrl: 'babysitter-dashboard.html',
      controller: 'babysitterDirectoryController as babysitters'
    }).state('babysitter-profile', {
      url: '/babysitters/babysitter-profile',
      params: {
        babysitterParam: null
      },
      templateUrl: 'babysitter-profile.html',
      controller: 'babysitterProfileController as babysitter'
    }).state('family', {
      url: '/family',
      component: 'familyList',
      resolve: {
        families: function(familyAPI) {
          return familyAPI.list();
        }
      }
    }).state('messages', {
      url: '/messages',
      templateUrl: 'messages.html',
      controller: 'messagesController as messages'
    }).state('familyProfile', {
      url: '/family/profile/:familyId',
      component: 'familyProfile',
      resolve: {
        profile: function(familyAPI, $stateParams) {
          return familyAPI.profileInfo($stateParams.familyId);
        }
      }
    }).state('pendingBabysitters', {
      url: '/pending-babysitters',
      component: 'pendingBabysittersList'
    }).state('pendingParents', {
      url: '/pending-parents',
      component: 'pendingParentsList'
    });
});
