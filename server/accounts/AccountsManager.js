/**
 * Created by Yanis on 2015-03-29.
 */

Meteor.methods({

    'subscribeWithPasswordAndProfile': function(username, password, profile){
        var user = Accounts.createUser(username, email, password);
        //profile.userId =

    }

});