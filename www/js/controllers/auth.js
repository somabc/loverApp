'use strict';

app.controller('AuthCtrl', function(Auth) {

    var auth = this;

    auth.login = function() {
        console.log('Login clicked');
        
        return Auth.login().then(function(user) {
            console.log(result.user);
        });
        
    };

    auth.logout = function() {
        Auth.logout();
    };
});