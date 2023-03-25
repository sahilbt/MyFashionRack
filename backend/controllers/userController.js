const User = require("../models/userModel");
const passport = require("../configuration/passport-config");
const { OAuth2Client } = require('google-auth-library');

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
                    res.status(200).json({userDetails: req.user, message: 'User authenticated'});
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
                res.status(200).json({userDetails: req.user, message: "authenticared"});
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

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });
  
const googleAuthCallback = passport.authenticate('google', { failureRedirect: 'http://localhost:3000', successRedirect: 'http://localhost:3000/Register' });


// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = 'http://localhost:8000/authentication/google/callback';

// const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// const googleAuth = (req, res) => {
//     const authorizeUrl = client.generateAuthUrl({
//       access_type: 'offline',
//       scope: ['profile'],
//     });
//     res.redirect(authorizeUrl);
//   };
  
//   const googleAuthCallback = async (req, res) => {
//     const code = req.query.code;
//     const { tokens } = await client.getToken(code);
//     // Use the tokens to make requests to the Google API
//     // You can also save the tokens to a database for later use
//     res.redirect('/');
//   };

module.exports = {
    registerUser,
    logInUser,
    logOutUser,
    googleAuth,
    googleAuthCallback
}