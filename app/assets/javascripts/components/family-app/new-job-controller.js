angular.module('familyApp')
    .controller('newJobFormController', ["familyAppAPI", "$http", function (familyAppAPI, $http) {
      /*************************
      Variables
      *************************/
      var self = this;
      this.toggleShow = true;

      familyAppAPI.activeBabysitters().success(function(response) {
        var nannysArray = [];
        console.log(response);
        for(var i = 0; i < response.length; i++) {
          if(response[i].role === 'nanny') {
            nannysArray.push(response[i]);
          }
        };
        self.nannys = nannysArray;

      });

      this.loadUser = function(user) {
        self.showUsers = false;
        self.id = user.id
        return self.recipient = user.name;
      }

      this.sendMessage = function(id, date, startTime, endTime, body) {
        // date format
        var newDate = new Date(date);
        var fullDate = newDate.getFullYear()+'-' + (newDate.getMonth()+1) + '-'+newDate.getDate();

        // start hour format
        var startHours = startTime.getHours();
        var startHours = ("0" + startHours).slice(-2);
        // start minutes format
        var startMins = startTime.getMinutes();
        var startMins = ("0" + startMins).slice(-2);

        // end hour format
        var endHours = endTime.getHours();
        var endHours = ("0" + endHours).slice(-2);
        // end minutes format
        var endMins = endTime.getMinutes();
        var endMins = ("0" + endMins).slice(-2);

        var end = endHours + ':' + endMins;
        var start = startHours + ':' + startMins;

        var newMsg = {};
        newMsg['sitter_id'] = id;
        newMsg['date'] = fullDate;
        newMsg['start_time'] = start;
        newMsg['end_time'] = end;
        newMsg['notes'] = body;

        console.log(newMsg);
        self.toggleShow = !self.toggleShow
        familyAppAPI.newJob(newMsg);
      }

  }]);
