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
    coordinates: {
        type: GeocoordsSchema
    }
});

//TODO : Change the data type of the schedule
ScheduleAvailabilitySchema = new SimpleSchema({
    from : {
        type : String
    },
    to: {
        type: String
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
    city: {
      type: String
    },
    country: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        index: 1
    },
    scheduleAvailability: {
      type: ScheduleAvailabilitySchema
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
                "loc": {$near: [lat, long], $maxDistance: radius}
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
