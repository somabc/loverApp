'use strict';

app.controller('AuthCtrl', function(Auth) {

    var auth = this;

    auth.login = function() {
        console.log('Login clicked');
        
        return Auth.login().then(function(user) {
            console.log(user.facebook);
        });
        
    };

    auth.logout = function() {
        Auth.logout();
    };
});