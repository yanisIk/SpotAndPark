/**
 * Created by Yanis on 2015-03-28.
 */
Profiles = new Meteor.Collection("profiles");

ProfileSchema = new SimpleSchema({
    userId: {
        type: String
    },
    firstName: {
        type: String,
        min: 3,
        max:40
    },
    lastName: {
        type: String,
        min: 3,
        max:40
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        min: 3,
        max:40
    },
    address: {
        type: String,
        min: 3,
        max:40
    },
    bonusPoints: {
        type: Number,
        optional: true
    }

});

Profiles.attachSchema(ProfileSchema);

///HELPERS

Profiles.helpers({



});

//HOOKS

Profiles.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.bonusPoints = 0;
});