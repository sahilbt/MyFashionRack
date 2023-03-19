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
        of: Boolean
    },
    followers: {
        type: Map,
        of: Boolean
    },
    followingStyles: {
        type: Map,
        of: Boolean
    },
    pictureRef: {
        public_id:{
            type:String
        },
        url:{
            type:String
        },
        height: {
            type:Number
        },
        width: {
            type:Number
        }
    },
    googleId:{
        type:String
    }

})

userSchema.plugin(passportLocalMongoose,{
    selectFields : 'firstName lastName displayName address age phoneNumber following followers followingStyles pictureRef'
})
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema)




