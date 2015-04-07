Meteor.methods({
    'ParkingPlaces.insert': function (parking) {

    },

    'ParkingPlaces.update': function(parkingId, modifiers) {

    },

    'ParkingPlaces.remove': function(parkingId) {

    },
    'ParkingPlaces.makeAvailable': function(parkingId) {
        if(!this.userId){
            throw new Meteor.Error("Login first")
        }
        check(parkingId, String);
        var lastUpdatedAtLimit = new Date() - 6000; //Can't make available if taken less than 1mn ago
        var parkingCursor = ParkingPlaces.find({parkingId: parkingId, lastUpdatedBy: this.userId,
                                                $lt:{lastUpdatedAt: lastUpdatedAtLimit}});
        if(parkingCursor.count() === 0){
            throw new Meteor.Error("This parking was not taken by you");
        }
        else{
            ParkingPlaces.update({parkingId: parkingId}, {$set:{isAvailable: true, lastUpdatedBy:this.userId}});
        }

    },
    'ParkingPlaces.makeNotAvailable': function(parkingId) {
        if(!this.userId){
            throw new Meteor.Error("Login first")
        }
        check(parkingId, String);
        ParkingPlaces.update({parkingId: parkingId}, {$set:{isAvailable: false, lastUpdatedBy:this.userId}});
    }


});
