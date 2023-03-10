import Link from "next/Link"
<<<<<<< HEAD
import { render } from "react-dom"
=======
>>>>>>> 9039be8f95eaa4f62e8e7c2956538fd3e07e9933
import Navbar from "../components/Navbar"
import Post from "../components/Post"
import posts from "../posts"

export default function Feed() {
    const renderPosts = posts.map(post => {
        return(
            <Post {...post}/>
        )
    })
    return(
<<<<<<< HEAD
        <div className="w-full">
            <Navbar/>
            <div className='w-full h-9 text-white mt-10'>
                <div className="grid place-items-center">
                    <div className="flex justify-between items-center h-9 w-[80%] bg-lightGrey rounded-xl outline outline-1 outline-pink px-7">
                        <Link href="#" className="group">
                            Streetwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Workwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Minimalist
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Formal
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Athleisure
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Vintage
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Second-hand
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='w-full  h-96  text-white mt-10'>
                <div className="grid place-items-center">
                    <div className="flex justify-between h-96 w-[80%]">
                        <div className="bg-lightGrey h-96 w-60 rounded-xl outline outline-1 outline-pink">
                            
                        </div>
                        <div className="flex flex-col gap-9">
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

            <div className="h-screen">

            </div>
=======
        <div className="mt-32 flex justify-center">
            <Navbar />
            <div className="w-10/12">
                <div className="text-white flex justify-between items-center h-9 bg-lightGrey rounded-xl outline outline-1 outline-pink px-24">
                    <Link href="#" className="group">
                        Streetwear
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Workwear
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Minimalist
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Formal
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Athleisure
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Vintage
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Second-hand
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                </div>

                <div className="flex h-96 ">
                    <div className="bg-lightGrey h-96 w-60 rounded-xl outline outline-1 outline-pink">
                        
                    </div>
                
                    <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                    
                    </div>
                    
                    <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                    
                    </div>
                </div>
            </div>
>>>>>>> 9039be8f95eaa4f62e8e7c2956538fd3e07e9933
        </div>
    )
}



