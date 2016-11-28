(function() {
  'use strict';

  angular.module('nannyApp').directive('uploadWatcher', function() {
    return {
      restrict: 'A',
      link: function($scope, $element) {

        var label = $element.next('label');
        var labelValue = label.html();

        $element.bind('change', function(event) {
          var fileName = '';
          if (event.target.value) {
            fileName = event.target.value.split('\\').pop();
          }
          if (fileName) {
            label.find('span').html(fileName);
          } else {
            label.html(labelValue);
          }
        });
      }
    };
  });
})();
