/**
 * Created by Yanis on 2015-03-28.
 */

Meteor.methods({
    'pay': function (parkingId, duration) {
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
            //RETURN RESULT OR ERROR
        }

    },

    'checkPayment': function(parkingId) {
        //VERIFY THE STATUS
    }

});

