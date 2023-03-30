const User = require("../models/userModel");
const Post = require("../models/postModel");
const Style = require("../models/styleModel");
const cloudinary = require("../configuration/cloudinary");
const { response } = require("express");

const createPost = async (req,res) => {

    //have to save userID in frontend
    const { image, user, description, outfitPieces, styleTags } = req.body;
    
    try{
        const result = await cloudinary.uploader.upload(req.body.image);
        const post = new Post({
            user,
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
    
    const { userID } = req.query;
    try {
        const post  = await Post.find({user: userID}).populate("user");
        res.status(200).json(post);
    } catch (error) {
        res.status(404);
    }
}

const getUserFeed = async(req,res) => {
    const { userID } = req.query;
    try{
        const currentUser = await User.findById(userID).lean();
        const followingUserIds = Object.keys(currentUser.following);
        const posts = await Post.find({ user: { $in: followingUserIds } }).populate("user").lean();
        res.status(200).json({ allPosts: posts, userInfo: currentUser });
    } 
    catch(error){
        console.log(error)
        res.status(404).json({ error: "Could not retrieve the user feed" });
    }
}

const getFollowingStyles = async (req,res) => {
    const { userID } = req.body;
    try{
        const user = await User.findById(userID, "followingStyles").lean();
        const userStyles = user.followingStyles;
        const posts = await Post.find({styleTags: {$in: userStyles}}).populate("user", "pictureRef", "displayName").lean();
        res.status(200).json(posts);
    } 
    catch(error){
        res.status(404).json({error: "Could not retrieve the following styles"})
    }
}

const getPostsFromAStyle = async (req,res) => {
    //const { styleName } = req.params;
    const { stylename} = req.query;
    try{
        const posts = await Post.find({styleTags: stylename}).populate("user").lean();
        res.status(200).json(posts);
    } 
    catch(error){
        console.log(error)
        res.status(404).json({error: "Could not retrieve the posts with that style"})
    }
}

const updateProfilePicture = async (req,res) => {
    const { image, userId } = req.body;
    try{
        const user = await User.findById(userId);
        const result = await cloudinary.uploader.upload(image, {
            public_id: user.pictureRef.public_id,
            overwrite: true
            });

        const newUser = await User.findByIdAndUpdate(userId, {pictureRef: {
            public_id:result.public_id,
            url:result.url, 
            width: result.width,
            height: result.height}
        })

        res.status(200).json({sucess: "Sucess"});
    } 
    catch(error){
        res.status(500).json({error: "Could not update profile pic"});
    }
}

const likePicture = async(req,res) => {
    const { postID, userID } = req.body;
    try{
        const post = await Post.findById(postID);
        const liked = post.like.get(userID);

        if(liked){
            post.like.delete(userID)
        }else{
            post.like.set(userID, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            postID,
            { like: post.like },
            { new: true }
        );

        res.status(200).json({"liked": liked, "updatedPost": updatedPost})
    } catch(error){
        console.log(error)
    }
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
        const { userID, userDisplayName } = req.body;
        const followedUser = await User.findOne({displayName: userDisplayName});
        const user = await User.findById(userID);
        const followed = user.following.get(followedUser._id.toString());
        if(followed){
            user.following.delete(followedUser._id);
            followedUser.followers.delete(user._id);
        }else{
            user.following.set(followedUser._id, true);
            followedUser.followers.set(user._id, true); 
        }

        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { following: user.following },
            {new: true}
        );

        const updatedFollowedUser = await User.findByIdAndUpdate(
            followedUser._id,
            { followers: followedUser.followers },
            {new: true}
        );
        res.status(200).json({currentUser: updatedUser, followUser: updatedFollowedUser });

    } catch (error) {
        console.log(error);
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
        const { userID, styleName } = req.body;
        const user = await User.findById(userID);
        const style = await Style.findOne({name: styleName});
        const following = user.followingStyles.get(style.name);

        if(following){
            user.followingStyles.delete(style.name);
        }else{
            user.followingStyles.set(style.name, true);
        }

        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { followingStyles: user.followingStyles },
            {new: true}
        );
        res.status(200).send({user:updatedUser});
    } catch (error) {
        console.log(error);
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

const findID = async (req,res) => {
    const { username } = req.query
    try{
        const foundUser = await User.findOne({
            displayName: username
        })
        res.status(200).json(foundUser)
    }
    catch(error){
        res.status(400)   
    }
}

const isFollowing = async (req,res) => {
    const { userID, userDisplayName } = req.query;
    try {
        const foundUser = await User.findById(userID);
        const checkIfFollowingUser = await User.findOne({displayName: userDisplayName});
        const isFollowing = foundUser.following.has(checkIfFollowingUser._id.toString());
        return res.status(200).json(isFollowing);
    } catch (error) {
        res.status(400);
    }
}

const likedPosts = async (req, res) => {
    const { userID } = req.query;
    try {
      const posts = await Post.find().exists("like." + userID).populate("user").lean();
      res.status(200).json({ posts });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Could not retrieve the liked posts" });
    }
  };

const searchUser = async (req,res) => {
    const { keyword } = req.query;
    try {
        const regex = new RegExp(keyword, 'i') // i for case insensitive
        const matchingUsers = await User.find({displayName: {$regex: regex}});
        console.log(matchingUsers);
        res.status(200).json(matchingUsers);
    } catch (error) {
        res.status(404).json({ error: "Could not retrieve the searched users" });
    }
}

const deletePost = async(req,res) => {
    const { postID } = req.query;
    try {
        await Post.deleteOne({ _id: postID});
        res.status(200).json({success: "Success"});
    } catch (error) {
        res.status(400).json({error: "Could not delete post"});
    }
}

  const delAccount = async(req,res) => {
    const { userID } = req.query;
    
    //Remove user from 
    try {
        const users = await User.find(); 
        for (const user of users) {
            if(user.following){
                user.following.set(userID, undefined, { strict: false }); 
            }
            if(user.follower){
                user.follower.set(userID, undefined, { strict: false }); 
            } 
            await user.save(); 
        }
    } catch (error) {
        res.send({error: "Couldnt remove user from follower/following maps"});
        console.log(error)
    }
    
    try {
        const posts = await Post.find(); 
        for (const post of posts) {
            if(post.like){
                post.like.set(userID, undefined, { strict: false }); 
            }
            await post.save(); 
        }
    } catch (error) {
        res.send({error: "Couldnt remove user from all likes"});
        console.log(error)
    }
  
    // Remove all posts made by the user
    try {
      const result = await Post.deleteMany({ user: userID });
      console.log(`Deleted ${result.deletedCount} posts for user ${userID}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not remove user's posts" });
    }
  
    // Remove the user account
    try {
      await User.deleteOne({ _id: userID });
      console.log(`Deleted account for user ${userID}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not delete account" });
    }

    res.status(200).json({error: "account deleted"})
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
    followStyle,
    findID,
    isFollowing,
    likedPosts,
    searchUser,
    deletePost,
    delAccount
}