const User = require("../models/userModel");
const passport = require("passport");


const registerUser = (req,res) => {

    var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        displayName: req.body.displayName, 
        address: {
            country:req.body.country,
            city: req.body.city ,
            street: req.body.street
        },
        birthday: req.body.birthday,
        phoneNumber: req.body.phoneNumber    
    })

    var callback = (err,newUser) => {
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res, ()=> {
                console.log("Session Created");
                res.send("Created Session for Registered User")
                //res.redirect("/protected");
            })
        }
    }
    User.register(newUser, req.body.password, callback);
}

const logInUser = (req,res) => {
    var returningUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(returningUser, (err) => {
        if(err) {
            console.log(err);
        }else{
            passport.authenticate("local");
            res.send("User has been logged in")
        }
    })
}

const logOutUser = (req,res) => {
    req.logout();
    res.send("User has been logged out");
}
 
const protected = (req,res) => {
    if(req.isAuthenticated()){
        res.send("Protected Route Accessed")
    }else{
        res.send("error")
        console.log("Access to protected route not granted")
    } 
}

const googleAuth = () => {
    passport.authenticate('google', { scope: ['profile'] }), (req,res) => {
        console.log(req)
    }
};

const googleAuthCallback = () => {
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
}};

module.exports = {
    registerUser,
    protected,
    logInUser,
    logOutUser,
    googleAuth,
    googleAuthCallback
}