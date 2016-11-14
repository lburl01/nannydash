angular.module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('nannyDash', {
      url: '/',
      abstract: true,
    }).state('nannyDash.family', {
      url: 'family',
      templateUrl: 'app.html'
    });
});
