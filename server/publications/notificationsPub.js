/**
 * Created by Yanis on 2015-03-28.
 */
Meteor.publish('myNotifications', function() {

    //If not logged in, return
    if(!this.userId){
        var errorToThrow = new Meteor.Error(403, "You need to login first");
        this.error(errorToThrow);
        return [];
    }
    else{
        return Notifications.getMyNotifications(this.userId);
    }

});