angular.module('app', ['ui.router', 'templates', 'angularUtils.directives.dirPagination'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('nannyDash', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('nannyDash.family', {
      url: 'family',
      templateUrl: 'app.html'
    }).state('nannyDash.babysitters', {
      url: 'babysitters',
      templateUrl: 'babysitter-dashboard.html',
      controller: 'babysitterDirectoryController as babysitters'
    }).state('nannyDash.babysitter-profile', {
      url: 'babysitter-profile',
      templateUrl: 'babysitter-profile.html',
      controller: 'babysitterProfileController as babysitter'
    });
});
