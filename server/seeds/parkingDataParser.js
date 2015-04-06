/**
 * Created by Yanis on 2015-04-06.
 */

Meteor.methods({
   'populateParkingsDB' : function(){
       Assets.getText('parkings.txt', function(err, data) {
           var parkings = EJSON.parse(data);

           for(parking in parkings){
               console.log('inserting', parking);
               ParkingPlaces.insert({country: country, cities: content[country]});
           }
       });
   }
});
