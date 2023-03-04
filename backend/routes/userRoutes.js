const express = require("express");
const router = express.Router();
const { registerUser, logInUser, logOutUser, protected } = require("../controllers/userController")

router.post('/register', registerUser);
router.post('/login', logInUser);
router.get('/logout', logOutUser);
router.get('/protected', protected);

module.exports = router;