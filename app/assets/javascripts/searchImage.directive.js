(function() {
  'use strict';

  angular.module('app').directive('searchImage', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function($element) {
        $element.addClass('empty');

        return function($scope, $element, $attrs, $ctrl) {
          $scope.$watch(function() {
            return $ctrl.$viewValue;
          }, function(newValue) {
            if (newValue) {
              $element.removeClass('empty');
              $element.addClass('sans-serif');
            } else {
              $element.addClass('empty');
              $element.removeClass('sans-serif');
            }
          });
        };
      }

    };
  });
})();
