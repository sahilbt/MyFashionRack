const mongoose= require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    displayName:{
        type:String
    },
    address: {
        country: {
          type: String,
        },
        city: {
            type: String,
        },
        street: {
          type: String
        }
    },
    age: {
        type: Number
    },
    phoneNumber:{
        type: String
    },
    following: {
        type: Array,
        default: []
    },
    followingStyles: {
        type: Array,
        default: []
    },
    pictureRef: {
        type:String
    }

})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", userSchema);