Meteor.startup(function() {

    if (ParkingPlaces.find({}).count() === 0) {

        var parkingPlaces = [
            {parkingId:"CDN_TEST1", coordinates:[45.504951, -73.627163]},
            {parkingId:"CDN_TEST2", coordinates:[45.503673, -73.628354]},
            {parkingId:"CDN_TEST3", coordinates:[45.504507, -73.630317]},
            {parkingId:"CDN_TEST4", coordinates:[45.507670, -73.622861]},
            {parkingId:"CDN_TEST5", coordinates:[45.504951, -73.627163]},
            {parkingId:"CDN_TEST6", coordinates:[45.503673, -73.628354]},
            {parkingId:"CDN_TEST7", coordinates:[45.504507, -73.630317]},
            {parkingId:"CDN_TEST8", coordinates:[45.507670, -73.622861]}
        ];

        //
        _each(parkingPlaces, function(parkingPlace){
            Meteor.call('ParkingPlaces.insert', parkingPlace);
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
