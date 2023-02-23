const express = require("express");
const router = express.Router();
const { registerUser, protected } = require("../controllers/userController")

router.post('/register', registerUser);
router.get('/protected', protected)

module.exports = router;