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

    }
});

