const localStrategy = require('passport-local').Strategy;
const Users = require("./models/users");

module.exports = function (passport){
  passport.serializeUser(function(user,done){
    done(null,user)
  });
  passport.deserializeUser(function(user,done){
    done(null,user)
  });

  passport.use(new localStrategy({
    usernameField: 'email',
		passwordField: 'userPassword'
  },function(email,userPassword,done){
    const userData = Users.findOne({ email : email , userPassword : userPassword, userStatus: 'active'}, function (err,user){
      if(err) { done(err) }
      else{
        if(user){
          done(null,{
            id: user._id,
            email : user.email
          })
        }else{
          done(null,false)
        }
      }
    })
  }))
}
