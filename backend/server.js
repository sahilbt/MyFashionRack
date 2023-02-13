//Express dependancies 
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port, () => console.log(`Server started on port ${port}`));
