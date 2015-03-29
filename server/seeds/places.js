Meteor.startup(function() {
/*
    if (Profiles.find({}).count() === 0) {

        var places = [
            {name:"CDN_TEST1", coordinates:[45.504951, -73.627163], address:"Montreal H3S1S5"},
            {name:"CDN_TEST2", coordinates:[45.503673, -73.628354], address:"3205 avenue Linton Montreal"},
            {name:"CDN_TEST3", coordinates:[45.504507, -73.630317], address:"Montreal 3222 Avenue Kent Montreal"},
            {name:"CDN_TEST4", coordinates:[45.507670, -73.622861], address:"2601 Avenue Soisson"},
            {name:"CDN_TEST5", coordinates:[45.504951, -73.627163], address:"Montreal H3S1S5"},
            {name:"CDN_TEST6", coordinates:[45.503673, -73.628354], address:"3205 avenue Linton Montreal"},
            {name:"CDN_TEST7", coordinates:[45.504507, -73.630317], address:"Montreal 3222 Avenue Kent Montreal"},
            {name:"CDN_TEST8", coordinates:[45.507670, -73.622861], address:"2601 Avenue Soisson"}
        ];

        //Set User_id, for each create user
        _each(places, function(place){

           console.log(this.index); //var user = Accounts.createUser("userTest")
        });


    }

/*
  Factory.define('profile', Profiles, {
    name: function() { return Fake.sentence(); },
    address: function() { return _.random(1, 5); }
  });

  if (Profiles.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('profile');
    });

  }
*/

});
