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

app.use(express.urlencoded({extended: false}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));


app.use(session({
    secret: process.env.SECRET_COOKIE,
    resave: false,
    saveUninitialized: false
  }))


app.use(passport.initialize());
app.use(passport.session());


app.use("/authentication", require("./routes/userRoutes"));
connect();
app.listen(port, () => console.log(`Server started on port ${port}`));
