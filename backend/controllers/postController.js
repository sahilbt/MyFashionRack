const User = require("../models/userModel");
const Post = require("../models/postModel");
const Style = require("../models/styleModel");
const cloudinary = require("../configuration/cloudinary");
const { response } = require("express");

const createPost = async (req,res) => {

    //have to save userID in frontend
    const { image, userID, username, description, outfitPieces, styleTags } = req.body;
    let result;
    
    try {
        const result = await cloudinary.uploader.upload(image);
    } catch (error) {
        console.log(error);
    }

    try{
        const findUser = await User.findById(userID);
        const post = new Post({
            userID,
            username,
            description,
            pictureRef:{public_id:result.public_id,
                url:result.url, width: result.width,
                height: result.width
            },
            like: {},
            outfitPieces,
            styleTags
        })
        await post.save();
        res.status(201).json(post);
    } catch(error){
        console.log(error);
        res.status(409);
    }   
}

//.populate() must have the pictureRef and display name or else request just loads
const getPostsFromUser = async(req,res) => {
    
    const { userID } = req.body;
    try {
        const post  = await Post.find({userID}).populate("user", "pictureRef", "displayName");
        res.status(200).json(post);
    } catch (error) {
        res.status(404);
    }
}

const getUserFeed = async(req,res) => {
    const { userID } = req.body;
    try{
        const user = await User.findById(userID, "following").populate("user", "pictureRef", "displayName").lean();
        const followingUserID = user.following;
        const posts = Post.find({userID: {$in: followingUserID}}).lean();
        res.status(200).json({allPosts: posts}, {userInfo: user});
    } 
    catch(error){
        res.status(404).json({error: "Could not retrieve the user feed"})
    }
}

const getFollowingStyles = async (req,res) => {
    const { userID } = req.body;
    try{
        const user = await User.findById(userID, "followingStyles").lean();
        const userStyles = user.followingStyles;
        const posts = await Post.find({userID: {$in: userStyles}}).populate("user", "pictureRef", "displayName").lean();
        res.status(200).json(posts);
    } 
    catch(error){
        res.status(404).json({error: "Could not retrieve the following styles"})
    }
}

const getPostsFromAStyle = async (req,res) => {
    const style = req.params.id
    try{
        const posts = await Post.find({styleTags: style}).populate("user", "pictureRef", "displayName").lean();
        res.status(200).json(posts);
    } 
    catch(error){
        res.status(404).json({error: "Could not retrieve the posts with that style"})
    }
}

const updateProfilePicture = async (req,res) => {
    const { image, userId } = req.body;
    let result;
    try{
        const user = await User.findById(userID);
        if (user.pictureRef.public_id === ''){
            const result = await cloudinary.uploader.upload(image);
            const newUser = await User.findByIdAndUpdate(userId, {pictureRef: {
                public_id:result.public_id,
                url:result.url, 
                width: result.width,
                height: result.width}
            })
        }
        else{
            const result = await cloudinary.uploader.upload(image, {
                public_id: user.public_id,
                overwrite: true
             });

        }
        res.json(200);
    } 
    catch(error){
        res.status(500).json({error: "Could not update profile pic"});
    }
}

const likePicture = async(req,res) => {
    const { postID, userID } = req.body;
    const post = Post.findById(postID);
    const liked = post.like.get(userID);

    if(liked){
        post.like.delete(userID)
    }else{
        post.like.set(userID, true)
    }

    const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
    );

    res.status(200).json(updatedPost, {"liked": liked})
}

const getRecommendedUsers = async(req,res) => {
    try{
        const { userID } = req.body;
        const user = User.findById(userID);
        const followedUsers = user.following;
        const recommended = await User.find({_id:{$nin: followedUsers}}).limit(5);
        res.status(200).json(recommended);
    }
    catch(error){
        res.status(500).json({error: "Could not retrieve users"})
    }
}

const getRecommendedStyles = async(req,res) => {
    try {
        const { userID } = req.body;
        const user = await User.findById(userID);
        const followedStyles = user.followingStyles;
        const recommended = await Style.find({_id:{$nin: followedStyles}}).limit(5);
        res.status(200).json(recommended);
    } catch (error) {
        res.status(500).json({error: "Could not retrieve styles"});
    }
}


const followUser = async(req,res) => {
    try {
        const { userID, displayName } = req.body;
        const followedUser = await User.find({displayName});
        const user = await User.findById(userID);
        const followed = user.following.get(followedUser);

        if(followed){
            user.following.delete(followUser._id);
            followedUser.followers.set(user._id, true);
        }else{
            user.following.set(followUser._id, true);
            followedUser.follers.delete(user._id);
        }

        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { following: user.following }
        );

        const updatedFollowedUser = await User.findByIdAndUpdate(
            followedUser._id,
            { followers: followedUser.followers }
        );
        res.status(200);

    } catch (error) {
        res.status(500).json({error: "Could not follow user"});
    }
}

const editProfile = async(req,res) => {
    try{
        const { userID, property, value } = req.body;
        const newValue = User.findByIdAndUpdate(userID, {property: value});
        res.status(200);
    } catch (error) {
        res.status(500).json({error: "Could not edit user"});
    }
}


const followStyle = async(req,res) => {
    try {
        const { userID, name } = req.body;
        const user = await User.findById(userID);
        const style = await Style.find({name});
        const following = user.followingStyles.get(style._id);

        if(following){
            user.followingStyles.delete(style._id)
        }else{
            user.following.set(style._id, true)
        }

        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { followingStyles: user.followingStyles }
        );
        res.status(200);
    } catch (error) {
        res.status(500).json({error: "Could not follow user"});
    }
}

const deleteAccount = async(req,res) => {
    try {
        const { userID, name } = req.body;
        await User.findByIdAndDelete(userID);
        res.status(200).json({result: "account deleted"});
    } catch (error) {
        res.status(500).json({error: "Could not delete user"});
    }
}

module.exports = {
    createPost,
    getPostsFromUser,
    getUserFeed,
    getFollowingStyles,
    getPostsFromAStyle,
    updateProfilePicture,
    editProfile,
    likePicture,
    getRecommendedUsers,
    getRecommendedStyles,
    deleteAccount,
    followUser,
    followStyle
}