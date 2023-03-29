import { AnimatePresence, motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"
import { useState } from "react"
import { useAppContext } from "../context/userContext"
import Like from "../public/heart-regular.svg"
import Liked from "../public/heart-solid.svg"
import { Avatar } from "@mui/material"
import Trash from "../public/trash-can-solid.svg"
import DeletePostModal from "./DeletePostModal"


export default function Modal({data, handleClick, like, num, handleLike, page}){
    const {user} = useAppContext();
    const renderLinks = data && data.outfitPieces.map(clothing => {
        return(
            <Link href={clothing.link} className="bg-pink rounded-full px-3 py-[2px] text-sm group" target="_blank">
                {clothing.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
            </Link>
        )
    })
    const renderStyles = data && data.styleTags.map(style => {
        return(
            <div className="bg-pink rounded-full px-3 py-[2px] text-sm group">
                <Link onClick={handleClick} href={'/feed/explore/' + style} >
                    {style}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>
            </div>
        )
    })
    const [deleteModal, setDeleteModal] = useState(false)
    function handleDelete(){
        setDeleteModal(prev => !prev)
    }
    return(
        <Backdrop handleClick={handleClick} >
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey w-3/5 h-2/3 grid grid-cols-2 rounded-xl text-white">
                <div className="relative bg-black rounded-l-lg">
                    <Image alt="Outfit" className="object-contain" src={data.pictureRef.url} fill />
                </div>
                <div className="flex flex-col w-full pt-4 pb-3 px-8 gap-3">
                    <div className="border-b border-[#4F4F4F] pt-2 pb-4 text-lg flex justify-between items-center gap-5">
                        <Link className="flex items-center group" href={"/users/" + data.user.displayName}>      
                            <motion.div
                                whileHover={{rotate: 360}}
                                transition={{duration: 0.4}}
                            >
                                <Avatar
                                    src = {data && data.user.pictureRef.url}
                                    sx={{ width: 28, height: 28 }}
                                />
                            </motion.div>    
                                <div className="ml-3 group">
                                    {data.user.displayName}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                                </div>

                            </Link>
                                     
                        {page == "me" && <Image src={Trash} onClick={handleDelete} className="h-5 w-auto cursor-pointer hover:scale-[1.2] duration-75"/>}
                    </div>
                    <div className="text-lg">
                        Description
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 text-xs max-w-full h-[20%] -mt-2">
                        {data.description}
                    </div>
                    <div className="text-lg">
                        Pieces and Links
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 max-w-full h-[17%]">
                        <div className="flex flex-wrap gap-3 -mt-1">
                            {renderLinks}
                        </div>
                    </div>
                    <div className="text-lg">
                        Style Tags
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 max-w-full h-[23%]">
                        <div className="flex flex-wrap gap-3 -mt-1">
                            {renderStyles}
                        </div>
                    </div>
                    <div className="flex mt-auto justify-between max-w-full">
                        <div>
                            {data.createdAt.substring(0,10)}
                        </div>
                        <div>
                        <div className="flex items-center gap-1">
                            <Image src={like ? Liked: Like} onClick={handleLike} className="h-5 w-auto cursor-pointer"/>
                            <h1>{num}</h1>
                        </div>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {deleteModal && <DeletePostModal handleClick={handleDelete} data={data} />}
                </AnimatePresence>
            </motion.div>
        </Backdrop>
    )
}