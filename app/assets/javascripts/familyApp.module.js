(function() {
  angular.module('familyApp', ['ui.router', 'templates'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('family_dashboard', {
          url: '/',
          controller: 'familyDashboard as dashboard',
          templateUrl: 'family/family-app.html'
      }).state('new_job_form', {
          url: '/new-job-form',
          controller: 'newJobFormController as jobForm',
          templateUrl: 'family/new-job-form.html'
      });

    }]);
})();
