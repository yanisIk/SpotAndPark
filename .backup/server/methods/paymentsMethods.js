/**
 * Created by Yanis on 2015-03-28.
 */

Meteor.methods({
    'Payments.pay': function (parkingId, duration) {
        if(!this.userId){
            var error = new Meteor.Error("403", "You need to login first");
            console.log(error);
            throw error;
        }
        else{
            //VALIDATE DATA
            check(duration,Number);
            check(parkingId, String);
            var user = Meteor.users.findOne({_id:this.userId});

            //CALL EXTERNAL PAYMENT API
            //VERIFY RESULT

            Meteor.call('ParkingPlaces.makeNotAvailable', parkingId);
            var delayInMs = duration*60*1000;


            //RETURN RESULT OR ERROR
        }

    },

    'Payments.checkPayment': function(parkingId) {
        //VERIFY THE STATUS
    },

    'Payments.clearPayment': function(paymentId){
        if ( this.connection == null ) {
            Payments.update({_id: paymentId},{$set:{isCleared: true}});
        }
        else {
            throw new Meteor.Error('server-only-method', 'Sorry, this method can only be called from the server.');
        }
    }

});

