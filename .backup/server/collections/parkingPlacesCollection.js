ParkingPlaces = new Mongo.Collection('parkingPlaces');

//SCHEMAS
LocationSchema = new SimpleSchema({

});

ParkingPlaceSchema = new SimpleSchema({
    parkingId: {
        type: String,
        label: "Parking ID",
        max: 60,
        min: 3
    },
    coordinates: { //[long,lat]
        type: [Number],
        decimal: true,
        minCount: 2,
        maxCount: 2,
        index: '2d',
        label: "coordinates"
    },
    isAvailable: {
        type: Boolean,
        index: 1
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
