//Express dependencies 
const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./configuration/database")
const port = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
const MongoDBStore = require("connect-mongodb-session")(session);
var GoogleStrategy = require('passport-google-oauth20').Strategy;
app.use(express.urlencoded({extended: false}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
});
const User = require("./models/userModel")

app.use(session({
    secret: process.env.SECRET_COOKIE,
    resave: false,
    saveUninitialized: false,
    store:sessionStore
  }))


app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.use(new GoogleStrategy({
  clientID: "579605667751-fpifgfkci2ih9c0hvqaaoa11c1na6iv2.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:8000/authentication/google/callback",
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });



app.use("/authentication", require("./routes/userRoutes"));

connect();

app.listen(port, () => console.log(`Server started on port ${port}`));
