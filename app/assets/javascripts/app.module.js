angular.module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('family', {
      url: '/family',
      component: 'familyList',
      resolve: {
        families: function(familyAPI) {
          return familyAPI.list();
        }
      }
    }).state('familyProfile', {
      url: '/family/profile',
      component: 'familyProfile'
      // resolve: {
      //   profile: function(familyAPI) {
      //     return familyAPI.profileInfo(19);
      //   }
      // }
    });
});
