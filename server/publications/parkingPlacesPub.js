
//Publish from HTTP API
Meteor.publish('parkingPlacesFromAPI', function(query) {
    var self = this;
    try {
    //TORONTO PARKING LIST API
        // http://www1.toronto.ca/City%20Of%20Toronto/Information%20&%20Technology/Open%20Data/Data%20Sets/Assets/Files/greenPParking2015.json
        var response = HTTP.get('STATIONNEMENT MONTREAL API URL',{
            timeout: 5000,
                params:{
                "format": "json",
                    "access_token": Meteor.settings.stationnementMtlApiKey
            }
        });

        if(response.statusCode === 200) {

            //Construire le document
            _.each(response.data.items, function (item) {
                var doc = {
                    /*
                     id: item.,
                     coordinates: item.,
                     payed: item.,
                     */
                };

                self.added('places', Random.id(), doc);
            });

            self.ready();
        }
    } catch(error) {
        console.log(error);
    }
});


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



