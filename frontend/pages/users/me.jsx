import Navbar from "../../components/Navbar"
import Post from "../../components/Post"
//import posts from "../../posts"
import { useAppContext } from "../../context/userContext";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function UserProfile(){
    const {user} = useAppContext();
    const [posts, setPosts ]  = useState([]);
    useEffect(() => {
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
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                            
                        </div>
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">

                        </div>
                    </div>
                    <div className="w-2/3 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Your Wardrobe
                        </h1>
                        <h1 className="w-full text-center text-[#808080] text-3xl">
                            {posts.length} Outfits
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