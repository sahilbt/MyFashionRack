import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/userContext";
import Axios from "axios";
import Post from "../../components/Post"
import { Avatar } from '@mui/material';
export default function Details(params) {
    const router = useRouter()
    const {user} = useAppContext();
    const[name,setName] = useState();
    const [posts, setPosts ]  = useState([]);
    const [person, setPerson] = useState()
    const [following, setFollowing] = useState();

    useEffect(() => {
        setName(router.query.username);
    }, [router.query.username]);

    useEffect(() => {
        if (name) {
            const fetchID = async () => {
                try {
                    const response = await Axios.get("http://localhost:8000/users/find", {params:{
                        username: name
                    }});

                    if (response.status == 200) {
                        setPerson(response.data);
                    }
                } catch (error) {
                    console.log(error);
                }

                try{
                    const response = await Axios.get("http://localhost:8000/users/checkFollowing", {params:{
                        userID: user._id, 
                        userDisplayName: name
                    }})

                    if (response.status == 200) {
                        setFollowing(response.data)
                    }
                } catch(error) {
                    console.log(error)
                }
            };

            fetchID();
        }
    }, [name]);

    useEffect(() => {
        if (person) {
            const fetchPosts = async () => {
                try {
                    const response = await Axios.get("http://localhost:8000/users/userPosts", {params:{
                        userID: person._id
                    }});

                    if (response.status == 200) {
                        setPosts(response.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            fetchPosts();
        }
    }, [person]);




    const renderPosts =  posts && posts.map(post => {
        return(
            <Post props={post} page="me"/>
        )
    })


    async function handleFollow(){
        try {
            const response = await Axios.patch("http://localhost:8000/users/followUser", {
                userID: user._id, 
                userDisplayName: name
            });

            if (response.status == 200) {
                setFollowing(following => !following)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full flex justify-center items-center mt-10">
                <div className="w-4/5 flex justify-between">
                    <div className="flex flex-col gap-9">
                        <div className="bg-lightGrey h-72 w-72 rounded-xl outline outline-1 outline-pink text-white flex flex-col items-center">
                            <Avatar 
                                className="mt-4"
                                src = {person && person.pictureRef.url}
                                sx={{ width: 90, height: 90 }}
                            />
                            <div className="text-2xl -mb-1">
                                {person && person.firstName} {person && person.lastName} 
                            </div>
                            <div className="text-[#808080]">
                                @{person && person.displayName}
                            </div>
                           
                            <label htmlFor="follow" className="relative cursor-pointer flex flex-col items-center mt-1">
                                <input type="checkbox" name="follow" checked={following} onChange={handleFollow} id="follow" className="peer sr-only"/>
                                <div className="w-24  bg-pink text-base text-center rounded-full text-white peer-checked:bg-[#515151] peer-checked:text-[#7E7E7E]">
                                    {following ? "Unfollow" : "Follow"}
                                </div>
                            </label>

                            <div className="flex items-center justify-center mt-2  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="mt-1">
                                <p className="text-pink inline mr-2">{person && person.followers ? Object.keys(person.followers).length : 0}</p> Followers
                            </div>

                            <div className="">
                                <p className="text-pink inline mr-2">{person && person.following ? Object.keys(person.following).length : 0} </p> Following
                            </div>

                            <div className="flex items-center justify-center mt-1  border-t border-[#4F4F4F] w-[85%]"></div>

                            <div className="text-[#808080] mt-1">
                                {person && person.address.state}, {person && person.address.country}
                            </div>

                                                 
                        </div>
                    </div>
                    <div className="w-2/3 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Their Wardrobe
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

Details.getInitialProps = async ({ query }) => {
    const { id } = query.username
    return { id }
}