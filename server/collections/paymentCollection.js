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
    confirmationId: {
        type: String
    }

});

Payments.attachSchema(PaymentSchema);

///HELPERS

Payments.helpers({
    'increaseTime': function(paymentId, increase) {
        check(paymentId, String);
        check(increase, Number);

        return Payments.update(
            { _id: paymentId },
            {
                $inc: { duration: increase }
            }
        );

    }

});

//HOOKS

Payments.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});

Payments.before.update(function (userId, doc) {
    doc.updateddAt = moment().toDate();
});