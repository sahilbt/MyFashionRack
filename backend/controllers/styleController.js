const User = require("../models/userModel");
const Post = require("../models/postModel");
const Style = require("../models/styleModel");

const addStyle = async (req,res) => {
    try{
        const style = await Style.exists({name: req.body.name});
        if(style){
            res.status(400).json({message: "Style already exists"});
        }else{
            const newStyle = new Style({
                name:req.body.name
            });
            newStyle.save();
            res.status(201).json({message: "Style created"});
        }
    } catch(error){
        res.status(500).json({error: "Could not add style"});
    }
}

module.exports = {
    addStyle
}