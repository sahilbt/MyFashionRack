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
        type: Map,
        of: Boolean,
        default: {}
    },
    followers: {
        type: Map,
        of: Boolean,
        default: {}
    },
    followingStyles: {
        type: Map,
        of: Boolean,
        default: {}
    },
    pictureRef: {
        public_id:{
            type:String,
            default: ""
        },
        url:{
            type:String,
            default: ""
        },
        height: {
            type:Number,
            default: ""
        },
        width: {
            type:Number,
            default: ""
        }
    },
    googleId:{
        type:String
    }
})

userSchema.plugin(passportLocalMongoose,{
    selectFields : 'firstName lastName displayName address birthday phoneNumber following followers followingStyles pictureRef username'
})
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema)




