//Express dependencies 
const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./configuration/database")
const port = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("./configuration/passport-config");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
app.use(express.json());
const MongoDBStore = require("connect-mongodb-session")(session);
app.use(express.urlencoded({extended: false}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
const cors = require('cors');
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
});

app.use(session({
    secret: process.env.SECRET_COOKIE,
    resave: false,
    saveUninitialized: false,
    store:sessionStore
  }))

app.use(passport.initialize());
app.use(passport.session());
app.use("/authentication", require("./routes/userRoutes"));
app.use("/users", require("./routes/postRoutes"));

connect();
app.listen(port, () => console.log(`Server started on port ${port}`));
