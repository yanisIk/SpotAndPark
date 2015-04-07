
Meteor.publish("allParkingPlaces", function(city){
   check(city, String);
    return ParkingPlaces.find({city: city});
});

Meteor.publish("nearbyParkingPlaces", function(lat,long, radius) {
    check(lat, Number);
    check(long, Number);
    check(radius, Number);
    /*
     //If not logged in, return
     if(!this.userId){
     var errorToThrow = new Meteor.Error(403, "You need to login first");
     this.error(errorToThrow);
     return [];
     }
     else{
     */
    return ParkingPlaces.findNearbyParkingPlaces(lat,long,radius);
    //}

});

Meteor.publish("singleParkingPlace", function(placeId) {
    check(placeId, String);
    return ParkingPlaces.findOne({_id: placeId}, {fields: {_id:0}});

});



