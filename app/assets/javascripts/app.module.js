angular.module('app', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('jobs', {
      url: '/',
      controller: 'allJobsController as allJobs',
      templateUrl: 'jobs-list.html'
    }).state('newJobs', {
      url: '/new-jobs',
      component: 'newJobsList'
    }).state('babysitters', {
      url: '/babysitters',
      templateUrl: 'babysitter-dashboard.html',
      controller: 'babysitterDirectoryController as babysitters'
    }).state('babysitter-profile', {
      url: '/babysitters/profile/:sitterId',
      params: {
        babysitterParam: null,
        sitterId: null
      },
      templateUrl: 'babysitter-profile.html',
      controller: 'babysitterProfileController as babysitter',
      resolve: {

      }
    }).state('family', {
      url: '/family',
      component: 'familyList',
      resolve: {
        families: ['familyAPI', function(familyAPI) {
          return familyAPI.list();
        }]
      }
    }).state('messages', {
      url: '/messages',
      templateUrl: 'messages.html',
      controller: 'messagesController as messages'
    }).state('familyProfile', {
      url: '/family/profile/:familyId',
      component: 'familyProfile',
      resolve: {
        profile: ['familyAPI', '$stateParams', function(familyAPI, $stateParams) {
          return familyAPI.profileInfo($stateParams.familyId);
        }]
      }
    }).state('pendingBabysitters', {
      url: '/pending-babysitters',
      component: 'pendingBabysittersList'
    }).state('pendingParents', {
      url: '/pending-parents',
      component: 'pendingParentsList'
    });
}]);
