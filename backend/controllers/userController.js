const express = require("express");
const User = require("../models/userModel");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const registerUser = (req,res) => {
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
}

const protected = (req,res) => {
    if(req.isAuthenticated()){
        res.send("Protected Route Accessed")
    }else{
        res.send("error")
        console.log("Access to protected route not granted")
    } 
}

module.exports = {
    registerUser,
    protected
}