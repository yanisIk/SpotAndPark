Meteor.publish("allParkingPlaces", function(city){

     //If not logged in, return
     if(!this.userId){
         var errorToThrow = new Meteor.Error(403, "You need to login first");
         this.error(errorToThrow);
         return [];
     }
     else {
         check(city, String);
         return ParkingPlaces.find({city: city});
     }
});

Meteor.publish("nearbyParkingPlaces", function(lat,long, radius) {
     //If not logged in, return
     if(!this.userId){
         var errorToThrow = new Meteor.Error(403, "You need to login first");
         this.error(errorToThrow);
         return [];
     }
     else{
         check(lat, Number);
         check(long, Number);
         check(radius, Number);
        return ParkingPlaces.findNearbyParkingPlaces(lat,long,radius);
    }

});

Meteor.publish("singleParkingPlace", function(placeId) {
    check(placeId, String);
    return ParkingPlaces.findOne({_id: placeId}, {fields: {_id:0}});

});



