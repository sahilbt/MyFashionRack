const User = require("../models/userModel");
const passport = require("../configuration/passport-config");

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
                res.status(200).json({ message: 'User authenticated' });
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
            res.status(401).json({ message: 'User not authenticated' });
        }else{
            passport.authenticate("local");
            res.status(200).json({ message: 'Authentication successful'});
        }
    })
}

const logOutUser = (req,res) => {
    req.logout();
    res.send("User has been logged out");
}
 
// const protected = (req,res) => {
//     if(req.isAuthenticated()){
//         res.send("Protected Route Accessed")
//     }else{
//         res.send("error")
//         console.log("Access to protected route not granted")
//     } 
// }

const googleAuth = passport.authenticate('google', { scope: ['profile'] });

const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/login' }, function(req, res) {
  // Successful authentication, redirect home.
  res.status(200).json({ message: 'Authentication successful'});
});

module.exports = {
    registerUser,
    logInUser,
    logOutUser,
    googleAuth,
    googleAuthCallback
}