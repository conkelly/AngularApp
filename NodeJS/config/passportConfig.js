var passport = require('passport'); 
const localStrategy = require('passport-local').Strategy; 
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStrategy({usernameField: 'fullName'}, 
    (username, password, done) => {
        User.findOne({ fullName: username }, 
            (err,user) => { 
                if (err)
                    return done(err); 
                else if (!user)
                    return done(null, false, {message: 'Name is not registered'}); 
                else if (!user.verifyPassword(password))
                    return done(null,false, {message: 'Wrong password.'});
                else 
                    return done(null, user);
            
                });
    })

     ); 

