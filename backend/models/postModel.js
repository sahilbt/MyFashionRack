const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{
        type:String,
    },
    description:{
        type:String
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
    like:{
        type: Map,
        of: Boolean
    },
    outfitPieces: [{
        type: Map,
        of: String
    }],
    styleTags:{
        type: Array,
        default: []
    }    
}, {timestamps:true});

module.exports = mongoose.model("Post", postSchema);