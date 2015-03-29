/**
 * Created by Yanis on 2015-03-29.
 */

var interval = 1*60*1000; //each 1mn
var sinceWhen = 1*60*1000;

//Check elapsed payment and make the parkingId available
Meteor.setInterval(function(){

    var recentlyFinishedAndNotClearedPayments = Payments.recentlyFinishedAndNotClearedPayments(sinceWhen);
    _.each(recentlyFinishedAndNotClearedPayments, function(payment){

        //Clear the payment
        Meteor.call('Payments.clearPayment', payment._id);
        //Make the parking available
        Meteor.call('ParkingPlaces.makeAvailable', payment.parkingId);

    }, interval);





}, interval);