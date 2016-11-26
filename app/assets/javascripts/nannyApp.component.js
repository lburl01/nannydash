(function() {
  'use strict';
  angular
    .module('nannyApp')
    .component('nannyApp', {
      bindings: {
        count: '<'
      },
      templateUrl: 'nanny/nanny-app.html',
      controller: ['nannyApp', '$http', '$scope', '$window', NannyAppController]
  });

  function NannyAppController(nannyApp, $http, $scope, $window) {
    var ctrl = this;
    ctrl.userId = "";

    ctrl.$onInit = function() {
      nannyApp.totalCount().then(function(data) {
        ctrl.count = data;
      });

      nannyApp.user().then(function(data) {
        ctrl.userId = data.id;
      });
    };

    $scope.$on('updateCount', function(event) {
      console.log('scope on updated count');
      nannyApp.totalCount().then(function(data) {
        ctrl.count = data;
      });
    });

    ctrl.signOut = function() {
      nannyApp.deleteUser();
    };


  }
})();

$(document).ready(function() {
  $("#nav-trigger span").click(function(){
    console.log('clicked');
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
    } else {
      $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
      $(this).addClass("open");
    }
  });
});
