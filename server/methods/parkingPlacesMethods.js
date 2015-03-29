Meteor.methods({
    'ParkingPlaces.insert': function (place) {
        Places.insert(place);
    },

    'ParkingPlaces.update': function(placeId, modifiers) {

    },

    'ParkingPlaces.remove': function(placeId) {

    }

});
