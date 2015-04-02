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
    paymentId: {
        type: String
    },
    parkingId:{
        type: String
    },
    isRead: {
        type: Boolean,
        optional: true
    }
});

Notifications.attachSchema(NotificationSchema);

///HELPERS

Notifications.helpers({
    'getMyNotifications': function(userId) {
        if(Meteor.isServer){
            return Notifications.find({
                    "userId": userId
                },
                {
                    fields: {_id: 0}
                });
        }

    },
    'checkIfNotificationExists' : function(notification){
        //Validate data
        check(notification,{
           userId: String,
            parkingId: String,
            paymentId: String
        });
        if(Notifications.find({
                $and:[
                    {userId: notification.userId},
                    {parkingId: notification.parkingId},
                    {paymentId: notification.paymentId}
                ]
            }).count>0){
            return true;
        }
        else{
            return false;
        }
    }

    });

//HOOKS

Notifications.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
    doc.isRead = false;
});