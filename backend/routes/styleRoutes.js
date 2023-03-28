const express = require("express");
const router = express.Router();
const { addStyle } = require("../controllers/styleController");
router.post('/add', addStyle);

module.exports = router;