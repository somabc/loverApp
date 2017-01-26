'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebaseObject, $state) {

    var ref = new Firebase(FURL);
    var auth = $firebaseAuth(ref);

    var Auth = {
        login: function() {
            return auth.$authWithOAuthPopup('facebook', {
                remember: "sessionOnly",
                scope: "public_profile, email, user_location, user_birthday, user_photos, user_about_me"
            });
        },

        logout: function() {
            return auth.$unauth();
        }       

    };

    auth.$onAuth(function(authData) {
        if(authData) {
            console.log('Logged in!');
        } else {
            $state.go('login');
            console.log('You need to login.');
        }
    });

    return Auth;

});