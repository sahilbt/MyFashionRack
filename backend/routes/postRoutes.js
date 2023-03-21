const express = require("express");
const router = express.Router();
const { verifyAuthentication } = require("../middleware/middleware");
const {
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
} = require("../controllers/postController");

router.post('/create', createPost);
router.get('/postsFromFeed', getUserFeed);
router.get('/userPosts', getPostsFromUser);
router.get('/followingStyles', getFollowingStyles);
router.get('/postsFromStyle', getPostsFromAStyle);
router.get('/recommendedStyles', getRecommendedStyles);
router.get('/recommendedUsers', getRecommendedUsers)
router.patch('/updateProfilePicture', updateProfilePicture);
router.patch ('/editProfile', editProfile);
router.patch ('/like', likePicture);
router.patch('/followUser', followUser);
router.patch('/followStyle', followStyle);
router.delete('/delAccount', deleteAccount);

module.exports = router;