/**
 * Created by Yanis on 2015-03-28.
 */

Meteor.methods({

    'Profiles.insert': function (profile) {
        Places.insert(profile);
    },

    'Profiles.update': function(profileId, modifiers) {

    },

    'Profiles.remove': function(profileId) {

    },

    'Profiles.addBonus': function(userId){
        if ( this.connection == null ) {
            check(userId, String);
            Profiles.update({userId: userId}, {$inc:{bonusPoints: 50}});
        }
        else {
            throw new Meteor.Error('server-only-method', 'Sorry, this method can only be called from the server.');
        }
    }
});

