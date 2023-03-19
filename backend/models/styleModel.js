const mongoose = require("mongoose");

const styleSchema = mongoose.Schema({
    userId:{
        type:String,
    },
    name:{
        type:String
    }}, {timestamps:true});

module.exports = mongoose.model("Style", styleSchema);