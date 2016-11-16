angular.module('app', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
  .config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');

    $stateProvider.state('jobs', {
      url: '/',
      component: 'jobList'
    }).state('babysitters', {
      url: 'babysitters',
      templateUrl: 'babysitter-dashboard.html',
      controller: 'babysitterDirectoryController as babysitters'
    }).state('nannyDash.babysitter-profile', {
      url: 'babysitters/babysitter-profile',
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
    }).state('familyProfile', {
      url: '/family/profile/:familyId',
      component: 'familyProfile',
      resolve: {
        profile: function(familyAPI, $stateParams) {
          return familyAPI.profileInfo($stateParams.familyId);
        }
      }
    });
});
