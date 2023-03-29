import Navbar from "../../components/Navbar"
import Post from "../../components/Post"
import EditPFPModal from "../../components/EditPFPModal"
import EditPWModal from "../../components/EditPWModal"
import Like from "../../public/heart-solid.svg"
import { useAppContext } from "../../context/userContext";
import { useEffect, useState } from "react";
import Axios from "axios";
import Link from "next/Link";
import Image from "next/Image";
import { Avatar } from "@mui/material";
import { AnimatePresence } from "framer-motion"
import moment from "moment"
import Lock from "../../public/lock-solid.svg"


export default function UserProfile(){
    const {user} = useAppContext();
    const [posts, setPosts ]  = useState([]);
    const [loggedUser, setLoggedUser] = useState()

    const [editPFP, setEditPFP] = useState(false)
    function handlePFP(){
        setEditPFP(() => !editPFP)
    }

    const [editPW, setEditPW] = useState(false)
    function handlePW(){
        setEditPW(() => !editPW)
    }

    useEffect(() => {

        if(user.displayName){
            const fetchUser = async () => {
                await Axios.get(`${process.env.NEXT_PUBLIC_URL}/users/find`, {params:{
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
            }
            fetchUser()
        }

        

        Axios.get(`${process.env.NEXT_PUBLIC_URL}/users/userPosts`, {params:{
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
                        <div className="bg-lightGrey h-80 w-72 rounded-xl outline outline-1 outline-pink text-white flex flex-col items-center">
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
                           
                            <div className="flex items-center justify-center mt-2 border-t border-[#4F4F4F] w-[85%]"></div>

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

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="text-[#808080] mt-2">
                                {loggedUser && moment(new Date(loggedUser.birthday)).format("MMMM Do, YYYY")}
                            </div>

                            <div className="text-[#808080]">
                                {loggedUser && loggedUser.address.state}, {loggedUser && loggedUser.address.country}
                            </div>

                        </div>
                        <div className="bg-lightGrey h-54 w-72 rounded-xl outline outline-1 outline-pink text-white flex flex-col items-center">
                            <div className="text-2xl mt-2 ">
                                Profile Settings
                            </div>

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div onClick={handlePFP} className="text-[#808080] group mt-2 cursor-pointer">
                                Edit Profile Picture
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </div>
                            <AnimatePresence>
                                {editPFP && <EditPFPModal handleClick={handlePFP}/>}
                            </AnimatePresence>
                            <div className="flex items-center gap-2">
                                {user.googleId && <Image src={Lock} className="h-4 w-auto"/>}
                                <div onClick={handlePW} className={`text-[#808080] group cursor-pointer ${user.googleId && "pointer-events-none"}`}>
                                    Edit Password
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                                </div>
                            </div>                         
                            <AnimatePresence>
                                {editPW && <EditPWModal handleClick={handlePW}/>}
                            </AnimatePresence>   

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <Link href="mailto:myfashionrackapp@gmail.com" className="text-[#808080] group mt-2 cursor-pointer">
                                Contact Support
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-[#808080]"></span>
                            </Link>

                            <div className="text-[#808080] group mb-1 cursor-pointer">
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