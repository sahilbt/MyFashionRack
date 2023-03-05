const mongoose= require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
var findOrCreate = require('mongoose-findorcreate');

const userSchema = mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
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
    birthday: {
        type: String
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
    },
    googleId:{
        type:String
    }

})

userSchema.plugin(passportLocalMongoose,{
    selectFields : 'firstName lastName displayName address age phoneNumber following followingStyles pictureRef'
})
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema)




