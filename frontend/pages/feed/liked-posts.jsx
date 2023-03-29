import Image from 'next/Image'
import Navbar from '../../components/Navbar'
import Post from "../../components/Post"
import { useAppContext } from "../../context/userContext"
import { useEffect, useState } from "react"
import Axios from 'axios'


export default function Style(params) {
    const { user } = useAppContext();
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(user._id)
        Axios.get(`${process.env.NEXT_PUBLIC_URL}/users/getLikedPosts`, {params:{
            userID: user._id
            }
        })
        .then(function (response) {
            if(response.status == 200){
                setPosts(response.data.posts);
            }  
        })
        .catch(function(error){
            console.log(error)
        })

    }, [user._id])

    const renderPosts = posts && posts.map(post => {
        return(
            <Post props={post} page="liked"/>
        )
    })

    return(
        <div className='w-full'>
            <Navbar/>

            <div className="w-full flex flex-col justify-center items-center mt-10 text-white">
                <div className='text-4xl tracking-widest flex gap-x-8'>
                    Your Liked Posts
                </div>
                <div className="relative flex items-center justify-center mt-4 border border-t w-[65%]">
                    <div className="absolute px-5 bg-darkGrey text-white"></div>
                </div>

                <div className='w-3/5 mt-11'>
                    <div className='grid grid-cols-3 grid-flow-row gap-11 pb-8'>
                        {renderPosts}
                    </div>
                </div>
            </div>
        </div>
    )
};
