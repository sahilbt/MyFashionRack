import Image from "next/Image"
import Modal from "./Modal.jsx"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function Post(props){
    const [modal, setModal] = useState(false)
    console.log(modal)
    function handleClick(){
        setModal(() => !modal)
    }
    return(
        <div className="flex flex-col">
            <div className="bg-lightGrey p-2 rounded-t-xl">
                <h1>{props.Username}</h1>
            </div>
            <div onClick={handleClick}>
                <div className="bg-black h-[500px] relative -z-10">
                    <Image alt="Outfit" className="object-contain" src={props.Image} fill/>
                </div>
            </div>
            <div className="bg-lightGrey p-2 rounded-b-xl flex justify-between">
                <h1>{props.Description}</h1>
                <h1>{props.Likes}</h1>
            </div>
            <AnimatePresence>
                {modal && <Modal data={props} modal={modal} handleClick={handleClick}/>}
            </AnimatePresence>
        </div>
    )
}