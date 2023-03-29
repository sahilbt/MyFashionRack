const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
        },
        default:{}
    },
    like:{
        type: Map,
        of: Boolean,
        default:{}
    },
    outfitPieces: [{
        name:String,
        link:String
    }],
    styleTags:{
        type: Array,
        default: []
    }    
}, {timestamps:true});

module.exports = mongoose.model("Post", postSchema);