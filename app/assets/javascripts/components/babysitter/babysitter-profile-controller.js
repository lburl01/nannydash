angular.module('app')
    .controller('babysitterProfileController', function ($http) {
      /*************************
      Variables
      *************************/
      this.name = 'Katie Jones';
      this.phone = '(919) 785-3412';
      this.email = 'katiejones@gmail.com';
      this.birthday = '10/23/1990';
      this.street = '123 Main St.';
      this.city = 'Raleigh';
      this.state = 'NC';
      this.zip = '27616';
      this.county = 'Wake';
      this.rec_one_name = 'Jeffrey Cambridge';
      this.rec_one_phone = '(919) 456-9876';
      this.rec_two_name = 'Kim Weather';
      this.rec_two_phone = '(919) 456-9876';
      this.rec_three_name = 'Laurie Douglas';
      this.rec_three_phone = '(919) 456-9876';
      this.cpr = true;
      this.first_aid = true;
      this.rate = 10;
      this.joined = '1/23/2014';

    });
