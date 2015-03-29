/**
 * Created by Yanis on 2015-03-28.
 */
Notifications = new Meteor.Collection("notifications");

//SCHEMAS
var Schemas = {};

NotificationSchema = new SimpleSchema({
    userId: {
        type: String
    },
    payment: {
        type: Object
    }
});

Notifications.attachSchema(NotificationSchema);

///HELPERS

Notifications.helpers({
    'getMyNotifications': function(userId) {
        return Notifications.find({
                "userId": userId
            },
            {
                fields: {_id: 0}
            });
    }

    });

//HOOKS

Notifications.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});