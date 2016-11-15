angular.module('app')
    .controller('babysitterDirectoryController', function ($scope, babysitterDirectoryAPI) {
      this.self = this;

      this.callAJAX = function() {
        babysitterDirectoryAPI.list().success(function(response) {
          self.babysitterObjects = response;
          console.log(self.babysitterObjects);
        }, function(response) {
          alert('Failed');
        });
      }
      this.callAJAX();



    });
