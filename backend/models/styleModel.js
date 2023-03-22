const mongoose = require("mongoose");

const styleSchema = mongoose.Schema({
    name:{
        type:String
    }}, {timestamps:true});

module.exports = mongoose.model("Style", styleSchema);