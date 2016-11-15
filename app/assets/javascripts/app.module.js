angular.module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/family');

    $stateProvider.state('family', {
      url: '/family',
      template: '<family-list></family-list>'
    });

});
