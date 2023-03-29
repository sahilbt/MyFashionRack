import Navbar from "../../components/Navbar"
import Post from "../../components/Post"
import Like from "../../public/heart-solid.svg"
import { useAppContext } from "../../context/userContext";
import { useEffect, useState } from "react";
import Axios from "axios";
import Link from "next/Link";
import Image from "next/Image";
import { Avatar } from "@mui/material";


export default function UserProfile(){
    const {user} = useAppContext();
    const [posts, setPosts ]  = useState([]);
    const [loggedUser, setLoggedUser] = useState()
    useEffect(() => {

        Axios.get("http://localhost:8000/users/find", {params:{
                username: user.displayName
                }
            })
            .then(function (response) {
                if(response.status == 200){
                    setLoggedUser(response.data);
                }  
            })
            .catch(function(error){
                console.log(error)
            })

        Axios.get("http://localhost:8000/users/userPosts", {params:{
                userID: user._id
                }
            })
            .then(function (response) {
                if(response.status == 200){
                    setPosts(response.data);
                }  
            })
            .catch(function(error){
                console.log(error)
            })
    },[user._id]);


    const renderPosts =  posts && posts.map(post => {
        return(
            <Post props={post} page="me"/>
        )
    })
    return(
        <div className="w-full">
            <Navbar />
            <div className="w-full flex justify-center items-center mt-10 ">
                <div className="w-4/5 flex justify-between">
                    <div className="flex flex-col gap-9">
                        <div className="bg-lightGrey h-64 w-72 rounded-xl outline outline-1 outline-pink text-white flex flex-col items-center">
                            <Avatar 
                                className="mt-4"
                                src = {loggedUser && loggedUser.pictureRef.url}
                                sx={{ width: 90, height: 90 }}
                            />
                            <div className="text-2xl -mb-1">
                                {loggedUser && loggedUser.firstName} {loggedUser && loggedUser.lastName} 
                            </div>
                            <div className="text-[#808080]">
                                @{loggedUser && loggedUser.displayName}
                            </div>
                           
                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="mt-2">
                                <p className="text-pink inline mr-2">{loggedUser && loggedUser.followers ? Object.keys(loggedUser.followers).length : 0}</p> Followers
                            </div>

                            <div className="">
                                <p className="text-pink inline mr-2">{loggedUser && loggedUser.following ? Object.keys(loggedUser.following).length : 0} </p> Following
                            </div>

                            <div className="group">
                                <Link href="/feed/liked-posts" className="flex">
                                    <Image className="w-4" src={Like} />
                                    <p className="ml-2">Liked Posts</p>
                                </Link>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                            </div>


                        </div>
                        <div className="bg-lightGrey h-60 w-72 rounded-xl outline outline-1 outline-pink text-white flex flex-col items-center">
                            <div className="text-2xl mt-2 ">
                                Profile Settings
                            </div>

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="text-[#808080] group mt-2">
                                Edit Location
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>

                            <div className="text-[#808080] group mt-2">
                                Edit Profile Picture
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>

                            <div className="text-[#808080] group mt-2">
                                Edit Password
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="text-[#808080] group mt-2">
                                Contact Support
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>

                            <div className="text-[#808080] group mt-2">
                                Delete Account
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>

                        </div>
                    </div>
                    <div className="w-2/3 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Your Wardrobe
                        </h1>
                        <h1 className="w-full text-center text-[#808080] text-3xl">
                            {posts && posts.length} Outfits
                        </h1>
                        <div className=" mt-4 border w-full"></div>
                        <div className="grid grid-cols-3 grid-flow-row gap-9 mt-10 pb-5">
                            {renderPosts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}