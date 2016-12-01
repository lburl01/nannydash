// Application assets
//= require angular/angular.min.js
//= require angular-rails-templates
//= require angular-ui-router/release/angular-ui-router.js
//= require angular-utils-pagination/dirPagination.js
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require shared.module.js
//= require app.module.js
//= require nannyApp.module.js
//= require familyApp.module.js
//= require app.component.js
//= require nannyApp.component.js
//= require familyApp.component.js
//= require nannyApp.service.js
//= require app.service.js
//= require_tree ./templates
//= require_tree ./components


// AJAX for login to dashboards
$(document).ready(function() {
  $("#login-form").on('ajax:success', function(evt, data, status, xhr) {
    window.location = "/#/";
  })
  .on("ajax:error", function(evt, xhr, status, error) {
    $(this).find(".actions").effect("shake", {distance: 10});
  });
});
