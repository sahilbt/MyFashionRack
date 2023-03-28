import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/userContext";
import Axios from "axios";
import ProfilePost from "../../components/ProfilePost"

export default function Details(params) {
    const router = useRouter()
    const {user} = useAppContext();
    const[name,setName] = useState();
    const [posts, setPosts ]  = useState([]);
    const [person, setPerson] = useState()

    useEffect( () => {
        setName(router.query.username);
        if(!name){
            console.log("Not ready");
        } else {
            const fetchID = async () => {
                await Axios.get("http://localhost:8000/users/find", {params:{
                    username: name
                    }
                })
                .then(function (response) {
                    if(response.status == 200){
                        setPerson(response.data);
    
                        // Move the second Axios request inside this block
                        Axios.get("http://localhost:8000/users/userPosts", {params:{
                            userID: response.data._id // Use response.data._id instead of person._id
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
                    }  
                })
                .catch(function(error){
                    console.log(error)
                }) 
            }
    
            fetchID()
        }
    }, [name]);

    const renderPosts =  posts && posts.map(post => {
        return(
            <ProfilePost {...post}/>
        )
    })

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full flex justify-center items-center mt-10">
                <div className="w-4/5 flex justify-between">
                    <div className="flex flex-col gap-9">
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink text-white">
                            <h1 className="text-2xl">{name}</h1>
                        </div>
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">

                        </div>
                    </div>
                    <div className="w-2/3 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Their Wardrobe
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

Details.getInitialProps = async ({ query }) => {
    const { id } = query.username
    return { id }
}