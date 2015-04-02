/**
 * Created by Yanis on 2015-03-28.
 */
Payments = new Meteor.Collection("payments");

PaymentSchema = new SimpleSchema({
    userId: {
        type: String
    },
    parkingId: {
        type: String
    },
    createdAt: {
        type: Number
    },
    duration: {
        type: Number,
        min: 5,
        max:240
        //Duration in minutes
    },
    finishedAt: {
        type: Number
    },
    confirmationId: {
        type: String
    },
    isCleared: {
        type : Boolean
    }

});

Payments.attachSchema(PaymentSchema);

///HELPERS

Payments.helpers({
    'getSoonToBeFinishedPayments' : function(inHowLong){
        if(Meteor.isServer){
            var before = moment() + inHowLong;
            var after = moment() + (inHowLong-(1*60*1000));
            //find payment that will finish before in 15mn and after in 14mn
            return Payments.find({finishedAt: {$gt: before, $lt: after}}).fetch();
        }
        else{
            throw new Meteor.Error("401", "Not authorized");
        }

    },
    'getRecentlyFinishedAndNotClearedPayments' : function(sinceWhen){
        if(Meteor.isServer){
            var when = moment() + sinceWhen; //in MS
            //find payments that finished since 1mn+ and that are not cleared
            return Payments.find({finishedAt: {$gt: when}, isCleared: false}).fetch();
        }
        else{
            throw new Meteor.Error("401", "Not authorized");
        }

    }

});

//HOOKS

Payments.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.finishedAt = doc.createdAt+ (doc.duration*60*1000); //duration in ms
});
