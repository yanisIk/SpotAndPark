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

    },
    'ParkingPlaces.makeAvailableWithBonus': function(parkingId) {
        if ( !this.userId ) {
            check(parkingId, String);
            //Check if there's a not cleared payment with this userId and parkingId
            var payment = Payments.findOne({userId: this.userId, parkingId: parkingId, isCleared: false});
            var parking = ParkingPlaces.findOne({parkingId: parkingId, isAvailable: false});

            if(payment && parking){
                //Clear the payment
                Meteor.call('Payments.clearPayment', payment._id);
                //Make the parking available
                Meteor.call('ParkingPlaces.makeAvailable', payment.parkingId);
            }
        }
        else {
            throw new Meteor.Error('401', 'Unauthorized');
        }

    }



});
