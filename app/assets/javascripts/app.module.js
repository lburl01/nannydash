angular.module('app', ['ui.router', 'templates'])
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
    });
});
