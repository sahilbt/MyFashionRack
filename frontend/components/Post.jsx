import Image from "next/Image"
import Modal from "./Modal.jsx"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Link from 'next/Link'
import Like from "../public/heart-regular.svg"
import Liked from "../public/heart-solid.svg"
import { useAppContext } from "../context/userContext";
import Axios from "axios"
import { Avatar } from "@mui/material"
import { motion } from "framer-motion"


export default function Post({props, page}){
    const { user } = useAppContext()
    const [modal, setModal] = useState(false)
    const [num, setNum] = useState()

    function handleClick(){
        setModal(() => !modal)
    }
    const [like, setLike] = useState()

    useEffect(() => {
        if(user._id){
            setLike(Object.keys(props.like).length != 0 && props.like.hasOwnProperty(user._id))
            setNum(props.like ? Object.keys(props.like).length : 0)
        }
    },[user._id]);

    async function handleLike(){
        try {
            const response = await Axios.patch("http://localhost:8000/users/like", {
                postID: props._id, 
                userID: user._id
            });

            if (response.status == 200) {
                if(like){
                    setNum(prev => prev-=1)
                }else{
                    setNum(prev => prev+=1)
                }
                setLike(prev => !prev)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            {page=="feed"?<div>
                <div className="bg-lightGrey px-4 py-2 rounded-t-xl">
                    <div className="flex">
                        <Link className="flex items-center group" href={"/users/" + props.user.displayName}>
                            <motion.div
                                whileHover={{rotate: 360}}
                                transition={{duration: 0.4}}
                            >
                                <Avatar
                                    src = {props && props.user.pictureRef.url}
                                    sx={{ width: 28, height: 28 }}
                                />
                            </motion.div>
                            <div className="ml-2 group">
                                {props.user.displayName}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div onClick={handleClick} className="cursor-pointer">
                    <div className="bg-black h-[500px] relative -z-10">
                        <Image alt="Outfit" className="object-contain" src={props.pictureRef.url} fill/>
                    </div>
                </div>
                <div className="bg-lightGrey py-2 rounded-b-xl flex justify-between px-4">
                    <h1>{props.createdAt.substring(0,10)}</h1>
                    <div className="flex items-center gap-1">
                        <Image src={like ? Liked: Like} onClick={handleLike} className="h-4 w-auto cursor-pointer"/>
                        <h1>{num}</h1>
                    </div>
                </div>
                <AnimatePresence>
                    {modal && <Modal page={page} data={props} modal={modal} like={like} num={num} handleLike={handleLike} handleClick={handleClick}/>}
                </AnimatePresence>
            </div>:

            <div>
                <div onClick={handleClick} className="w-full aspect-square">
                    <div className="bg-black relative -z-10 w-full h-full rounded-lg">
                        <Image alt="Outfit" className="object-cover rounded-lg" src={props.pictureRef.url} fill/>
                    </div>
                    <AnimatePresence>
                        {modal && <Modal page={page} data={props} modal={modal} like={like} num={num} handleLike={handleLike} handleClick={handleClick}/>}
                    </AnimatePresence>
                </div>
            </div>}
        </div>


    )
}