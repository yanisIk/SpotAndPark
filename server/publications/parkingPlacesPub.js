
//Publish from HTTP API
Meteor.publish('parkingPlacesFromAPI', function(query) {
    var self = this;
    try {

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


Meteor.publish("allParkingPlaces", function(){
   return ParkingPlaces.find();
});

Meteor.publishComposite("singleParkingPlace", function(placeId) {
    return {
        find: function() {
            return ParkingPlaces.findOne({_id: placeId}, {fields: {_id:0}});
        }
        // ,
        // children: [
        //   {
        //     find: function(item) {
        //       return [];
        //     }
        //   }
        // ]
    }
});


Meteor.publishComposite("nearbyParkingPlaces", function(lat,long, radius) {
  return {
    find: function() {

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


    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
