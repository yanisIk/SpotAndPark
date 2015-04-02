/**
 * Created by Yanis on 2015-03-29.
 */

Meteor.methods({

    'subscribeWithEmailPasswordAndProfile': function(email, password, profile){
        //Validate data

        Accounts.createUser(email, password);
        profile.email = email;

        Profiles.insert(profile);

    }

});