const express = require("express");
const router = express.Router();
const { registerUser, logInUser, logOutUser, patchUser, googleAuth, googleAuthCallback, googleCheck, editPassword, getGoogleUser } = require("../controllers/userController");


router.post('/register', registerUser);
router.post('/login', logInUser);
router.patch('/addUserDetail', patchUser);
router.get('/logout', logOutUser);
router.get('/google',googleAuth);
router.get('/google/callback', googleAuthCallback);
router.get('/google/googleCheck', googleCheck);
router.post('/editPassword', editPassword);
router.get('/google/getGoogle', getGoogleUser);


module.exports = router;