const express = require("express");
const router = express.Router();
const { registerUser, logInUser, logOutUser, googleAuth, googleAuthCallback } = require("../controllers/userController");


router.post('/register', registerUser);
router.post('/login', logInUser);
router.get('/logout', logOutUser);
router.get('/google',googleAuth)
router.get('/google/callback', googleAuthCallback);



module.exports = router;