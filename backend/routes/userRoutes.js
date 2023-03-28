const express = require("express");
const router = express.Router();
const { registerUser, logInUser, logOutUser, patchUser, googleAuth, googleAuthCallback, googleCheck } = require("../controllers/userController");


router.post('/register', registerUser);
router.post('/login', logInUser);
router.patch('/addUserDetail', patchUser);
router.get('/logout', logOutUser);
router.get('/google',googleAuth);
router.get('/google/callback', googleAuthCallback);
router.get('/google/googleCheck', googleCheck);

module.exports = router;