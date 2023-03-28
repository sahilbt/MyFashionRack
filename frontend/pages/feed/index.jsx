import Link from "next/Link"
import Image from "next/Image"
import Navbar from "../../components/Navbar.jsx"
import Post from "../../components/Post.jsx"
// import posts from "../../posts"
import user2 from "../../user"
import { Avatar } from '@mui/material'
import Like from "../../public/like.svg"
import { useAppContext } from "../../context/userContext"
import { useEffect, useState } from "react"
import Axios from "axios"

export default function Feed() {
    const {user} = useAppContext();
    const [posts, setPosts ]  = useState([]);
    const [me, setMe] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/users/postsFromFeed", {params:{
            userID: user._id
            }
        })
        .then(function (response) {
            if(response.status == 200){
                setPosts(response.data.allPosts);
                setMe(response.data.userInfo);
            }  
        })
        .catch(function(error){
            console.log(error)
        })
    },[user._id]);

    const renderPosts = posts.map(post => {
        return(
            <Post props={post} page="feed"/>
        )
    })
    return(
        <div className="w-full">
            <Navbar/>
            <div className='w-full h-9 text-white mt-10'>
                <div className="grid place-items-center">
                    <div className="flex justify-between items-center h-9 w-[80%] bg-lightGrey rounded-xl outline outline-1 outline-pink px-7">
                        <Link href="feed/explore/Streetwear" className="group">
                            Streetwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Formal" className="group">
                            Formal
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Workwear" className="group">
                            Workwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Minimalist" className="group">
                            Minimalist
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Athleisure" className="group">
                            Athleisure
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Vintage" className="group">
                            Vintage
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Second-Hand" className="group">
                            Second-Hand
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Cosplay" className="group">
                            Cosplay
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Business-Casual" className="group">
                            Business-Casual
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Loungewear" className="group">
                            Loungewear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='w-full grid place-items-center h-96 text-white mt-10'>
                <div className="flex justify-between h-96 w-[80%]">
                    <div className="bg-lightGrey h-64 w-72 rounded-xl outline outline-1 outline-pink flex flex-col items-center">
                        <Link href="/users/me">
                            <Avatar 
                                className="mt-4"
                                src = {user2.pictureRef.url}
                                sx={{ width: 90, height: 90 }}
                                />
                        </Link>
                        <div className="text-2xl -mb-1">
                            {me.firstName} {me.lastName} 
                        </div>

                        <div className="text-[#808080]">
                            @{me.displayName}
                        </div>

                        <div className="relative flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                        <div className="mt-2">
                            <p className="text-pink inline mr-2"></p> {me.followers ? Object.keys(me.followers).length : 0} Followers
                        </div>

                        <div className="">
                            <p className="text-pink inline mr-2"></p> {me.following ? Object.keys(me.following).length : 0} Following
                        </div>

                        <div className="">
                            <Link href="/feed/liked-posts" className="flex">
                                <Image className="w-4" src={Like} />
                                <p className="ml-2">Liked Posts</p>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-9 w-[30%]">
                        {renderPosts}
                    </div>
                    
            
                    <div className="bg-lightGrey h-64 w-72 rounded-xl outline outline-1 outline-pink flex flex-col items-center">
                        <div className="text-2xl mt-2">
                            Suggested Users
                        </div>

                        <div className="relative flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>
                    </div>
                        

  
                </div>
            </div>


        </div>
    )
}


