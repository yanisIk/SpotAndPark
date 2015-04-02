ParkingPlaces = new Mongo.Collection('parkingPlaces');

//SCHEMAS

GeocoordsSchema = new SimpleSchema({
    lng: {
        type : Number,
        decimal: true,
        min: -180,
        max: 180
    },
    lat: {
        type : Number,
        decimal: true,
        min: -90,
        max: 90
    }
});

LocationSchema = new SimpleSchema({
    type : {
        type : String,
        autoValue: function() {
            return "Point";
        }
    },
    coordinate: {
        type: GeocoordsSchema
    }
});

ParkingPlaceSchema = new SimpleSchema({
    parkingId: {
        type: String,
        label: "Parking ID",
        max: 60,
        min: 3
    },
    loc: {
        type: LocationSchema,
        index: '2d'
    },
    isAvailable: {
        type: Boolean,
        index: 1
    },
    panelImageUrl: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    lastUpdatedBy: { //userId
        type: String,
        optional: true
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
