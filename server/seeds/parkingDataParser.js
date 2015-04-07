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


/**
 //DANS FICHIER signalisation-geoloc-poteau-CDNNDG.json
 {
    "type":"Feature",
    "geometry":{"type":"Point",
                "coordinates":[295426.719,5036939.5]},
    "properties":{"POTEAU_ID_POT":93007,
                  "DATE_CONCEPTION_POT":20120731000000,
                  "DESCRIPTION_REP":"Réel",
                  "DESCRIPTION_RTP":"3- Fût",
                  "X":295426.719,
                  "Y":5036939.5,
                  "ID_ARRONDISSEMENT":"34",
                  "TRC_ID":1310267}
}


 //DANS FICHIER signalisation-description-panneau.json
 {
    "json_featuretype":"signalisation-description-panneau"
    ,"POTEAU_ID_POT":54
    ,"PANNEAU_ID_PAN":57
    ,"DESCRIPTION_RPA":"\\A 16h-18h30 LUN. AU VEN."
    ,"CODE_RPA":"AV-PF" //IMAGE
    ,"FLECHE_PAN":0
    ,"POSITION_POP":7
}
 **/