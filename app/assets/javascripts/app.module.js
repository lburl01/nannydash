angular.module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/family');

    $stateProvider.state('family', {
      url: '/family',
      component: 'familyList',
      resolve: {
        families: function(familyAPI) {
          return familyAPI.list().then(function(response) {
            return response.data;
          }, function(response) {
            alert('Failed');
          });
        }
      }
    });
});
