import Link from "next/Link"
import Navbar from "../../components/Navbar.jsx"
import Post from "../../components/Post.jsx"
import posts from "../../posts"
import user from "../../user"
import { Avatar } from '@mui/material'

export default function Feed() {
    const myMap = new Map();
    myMap.set('0', true);
    myMap.set('1', true);
    myMap.set('2', true);

    const renderPosts = posts.map(post => {
        return(
            <Post {...post}/>
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
                        <Link href="feed/explore/Workwear" className="group">
                            Workwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Minimalist" className="group">
                            Minimalist
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="feed/explore/Formal" className="group">
                            Formal
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
                        <Link href="feed/explore/Second-hand" className="group">
                            Second-hand
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='w-full grid place-items-center h-96 text-white mt-10'>
                <div className="flex justify-between h-96 w-[80%]">
                    <div className="bg-lightGrey h-96 w-72 rounded-xl outline outline-1 outline-pink flex flex-col items-center">
                        <Avatar 
                            className="mt-4"
                            src = {user.pictureRef.url}
                            sx={{ width: 90, height: 90 }}
                        />

                        <div className="text-2xl -mb-1">
                            {user.firstName} {user.lastName} 
                        </div>

                        <div className="text-[#808080]">
                            @{user.displayName}
                        </div>

                        <div className="relative flex items-center justify-center mt-2  border-t border-[#808080] w-[85%]"></div>

                        <div className="mt-2">
                            <p className="text-pink inline mr-2">{myMap.size}  </p> Followers
                        </div>

                        <div className="">
                            <p className="text-pink inline mr-2">{myMap.size}</p> Following
                        </div>
                    
                        <div className="relative flex items-center justify-center mt-2  border-t border-[#808080] w-[85%]"></div>

                        
                    </div>

                    <div className="flex flex-col gap-9 w-[30%]">
                        {renderPosts}
                    </div>
                    
                    <div className="grid gap-9">
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                        
                        </div>
                        
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                        
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}



