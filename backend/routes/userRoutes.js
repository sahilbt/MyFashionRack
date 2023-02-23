const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const User = require("../models/userModel");


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.post('/register', (req,res) => {
    User.register({username: req.body.username, location: req.body.location}, req.body.password, (err,user) => {
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res, ()=> {
                console.log("Session Created");
                res.send("Created Session for Registered User")
                //res.redirect("/protected");
            })
        }
    })
})

router.get('/protected', (req,res)=>{
    if(req.isAuthenticated()){
        res.send("Protected Route Accessed")
    }else{
        res.send("error")
        console.log("Access to protected route not granted")
    }
})

module.exports = router;