const mongoose= require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
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
    }

})

module.exports = mongoose.model("User", userSchema);