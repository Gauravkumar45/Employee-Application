var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GithubStrategy = require('passport-github2').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "23648296370-k68gt0e2f2csgleeseucq1crs7bcsc2m.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "a5bb4eeabf37118ae57d"
const GITHUB_CLIENT_SECRET = "84038893f09eaea8213dded4ffe53c7fbd1bed5f"

const FACEBOOK_CLIENT_ID = ""
const FACEBOOK_CLIENT_SECRET = ""

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile)
}
));

// passport.use(new FacebookStrategy({
//   clientID: FACEBOOK_CLIENT_ID,
//   clientSecret: FACEBOOK_CLIENT_SECRET,
//   callbackURL: "/auth/facebook/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   done(null,profile)
// }
// ));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})