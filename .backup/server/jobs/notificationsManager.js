/**
 * Created by Yanis on 2015-03-29.
 */

var interval = 1*60*1000; //each minute
var inHowLong = 15*60*1000; //in 15mn

//Check soon to be finished payments and add a notification if it's the case
Meteor.setInterval(function(){

    var soonToBeFinishedPayments = Payments.getSoonToBeFinishedPayments(inHowLong);

    _.each(soonToBeFinishedPayments, function(payment){
       var userId = payment.userId;
        var parkingId = payment.parkingId;
        var paymentId = payment._id;

        var notification = {
            userId: userId,
            paymentId: paymentId,
            parkingId: parkingId,
        }
        var notificationExists = Notifications.checkIfNotificationExists(notification);

        if(!notificationExists){
            Notifications.insert(notification);
        }

    });

}, interval);