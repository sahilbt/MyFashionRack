const User = require("../models/userModel");
const passport = require("../configuration/passport-config");

const registerUser = async(req,res) => {

    let usernameExists = await User.exists({displayName: req.body.displayName});

    if (usernameExists){
        res.status(401).json({message: 'Display Name already exists'});
    }
    else{
        var newUser = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            displayName: req.body.displayName, 
            address: {
                country:req.body.address.country,
                city: req.body.address.city ,
                street: req.body.address.street
            },
            birthday: req.body.birthday,
            phoneNumber: req.body.phoneNumber    
        })
    
        var callback = (err,newUser) => {
            if(err){
                res.status(401).json({message: 'Email already exists' });
            }else{
                passport.authenticate("local")(req,res, ()=> {
                    res.status(200).json({ userObj: newUser, message: 'User authenticated'});
                })
            }
        }
        User.register(newUser, req.body.password, callback);
    }
}

const logInUser = (req,res) => {
    var returningUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(returningUser, (err) => {
        if(err) {
            res.status(401).send({ message: 'User not authenticated' });
        }else{
            passport.authenticate("local")(req,res, ()=> {
                res.status(200).json({message: "authenticared"});
            });
        }
    })
}

const logOutUser = (req,res) => {
    req.logout((err)=>{
        if(err){
            res.status(500).json({message: "Error logging out"})
        }else{
            res.status(200).clearCookie('connect.sid', {
                path: '/'
              });
            req.session.destroy(function (err) {
                res.status(200).json({message: "bye"});
            });
        }
    });
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