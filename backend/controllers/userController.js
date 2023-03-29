const User = require("../models/userModel");
const passport = require("../configuration/passport-config");
const cloudinary = require("../configuration/cloudinary");

const registerUser = async(req,res) => {
    let usernameExists = await User.exists({username: req.body.username});
    if (usernameExists){
        res.status(401).json({message: 'Display Name already exists'});
    }
    else{
        var newUser = new User({
            username: req.body.username,    
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

const patchUser = async (req,res) => {
        try{
            const result = await cloudinary.uploader.upload(req.body.image);
            const findUser = await User.exists({displayName: req.body.displayName});

            if (findUser){
                res.status(401).json({message: "Username already exists"});
            }
            else{
                const newUser = await User.findByIdAndUpdate(
                    req.body.userID, 
                    {firstName: req.body.firstName,
                    lastName: req.body.lastName, 
                    displayName: req.body.displayName, 
                    address: {
                        country:req.body.address.country,
                        state: req.body.address.state
                    },
                    birthday: req.body.birthday,
                    phoneNumber: req.body.phoneNumber,
                    pictureRef: {
                        public_id:result.public_id,
                        url:result.url, 
                        width: result.width,
                        height: result.width
                        }},
                    {new: true}
                )
                res.status(200).json(newUser);
            }            
        } 
        catch(error){
            res.status(500).json({error: "Could not edit user details"});
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

const logOutUser = (req, res) => {
    req.logout((err) => {
      if (err) {
        res.status(500).json({ message: "Error logging out" });
        return;
      }
  
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error logging out" });
          return;
        }
  
        res.clearCookie("connect.sid");
        res.status(200).json({ message: "bye" });
      });
    });
  };
 

  const editPassword = async(req,res) => {
    
    const {userName, newPassword} = req.body;
    const sanitizedUser = await User.findByUsername(userName);

    try {
      await sanitizedUser.setPassword(newPassword);
      await sanitizedUser.save();
      res.status(200).json({ message: 'Successful!' });
    } 
    catch (err) {
      res.status(422).send(err);
    }
 
  }


// const protected = (req,res) => {
//     if(req.isAuthenticated()){
//         res.send("Protected Route Accessed")
//     }else{
//         res.send("error")
//         console.log("Access to protected route not granted")
//     } 
// }

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] }, (err, user, info) => {
    console.log('googleAuth function called!');
  });  
const googleAuthCallback = passport.authenticate('google', { failureRedirect: 'http://localhost:3000/Login', successRedirect: 'http://localhost:3000/googleLoading' });

const googleCheck =  (req,res) => {
    passport.authenticate('google', { scope: ['profile', 'email'] }, async (err, user, info) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!user) {
          return res.status(401).send(info);
        }
        const googleId = user.googleId;
        const foundUser = await User.findOne({googleId});
        if (foundUser.displayName){
            res.send({foundUser, message:"REGISTERED"});
        }else{
            res.send({foundUser, message:"NOT"});
        }
      })(req, res);
}

const getGoogleUser = (req,res) => {
    res.send(req.user)
}



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
    patchUser,
    googleAuth,
    googleAuthCallback,
    googleCheck,
    editPassword,
    getGoogleUser
}