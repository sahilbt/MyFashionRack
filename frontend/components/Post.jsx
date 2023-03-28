import Image from "next/Image"
import Modal from "./Modal.jsx"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Link from 'next/Link'
import Like from "../public/heart-regular.svg"
import Liked from "../public/heart-solid.svg"

export default function Post(props){
    const [modal, setModal] = useState(false)
    function handleClick(){
        setModal(() => !modal)
    }
    const [like, setLike] = useState()
    return(
        <div className="flex flex-col">
            <div className="bg-lightGrey p-2 rounded-t-xl">
                <Link href={"/users/" + props.Username}>{props.Username}</Link>
            </div>
            <div onClick={handleClick} className="cursor-pointer">
                <div className="bg-black h-[500px] relative -z-10">
                    <Image alt="Outfit" className="object-contain" src={props.Image} fill/>
                </div>
            </div>
            <div className="bg-lightGrey p-2 rounded-b-xl flex justify-between">
                <h1>{props.Date}</h1>
                <div className="flex items-center gap-1">
                    <Image src={like ? Liked: Like} onClick={()=>{setLike(prev => !prev)}} className="h-5 w-auto"/>
                    <h1>{props.Likes}</h1>
                </div>
            </div>
            <AnimatePresence>
                {modal && <Modal data={props} modal={modal} like={like} setLike={setLike} handleClick={handleClick}/>}
            </AnimatePresence>
        </div>
    )
}