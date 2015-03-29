ParkingPlaces = new Mongo.Collection('parkingPlaces');

//SCHEMAS
ParkingPlaceSchema = new SimpleSchema({
    parkingId: {
        type: String,
        label: "Parking ID",
        max: 60,
        min: 3
    },
    coordinates: {
        type: [Number],
        index: '2d',
        label: "coordinates"
    }
});




ParkingPlaces.attachSchema(ParkingPlaceSchema);

///HELPERS

ParkingPlaces.helpers({
    'findNearbyParkingPlaces': function(lat,long,radius) {
        return ParkingPlaces.find({
                "coordinates": {$near: [lat, long], $maxDistance: radius}
            },
            {
                fields: {_id: 0}
            });
    }
});

//HOOKS

ParkingPlaces.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
