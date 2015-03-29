Meteor.methods({
    'ParkingPlaces.insert': function (parking) {

    },

    'ParkingPlaces.update': function(parkingId, modifiers) {

    },

    'ParkingPlaces.remove': function(parkingId) {

    },
    'ParkingPlaces.makeAvailable': function(parkingId) {
        if ( this.connection == null ) {
            ParkingPlaces.update({parkingId: parkingId}, {$set:{isAvailable: true}});
        }
        else {
            throw new Meteor.Error('server-only-method', 'Sorry, this method can only be called from the server.');
        }

    },
    'ParkingPlaces.makeNotAvailable': function(parkingId) {
        if ( this.connection == null ) {
            ParkingPlaces.update({parkingId: parkingId}, {$set:{isAvailable: false}});
        }
        else {
            throw new Meteor.Error('server-only-method', 'Sorry, this method can only be called from the server.');
        }

    }



});
