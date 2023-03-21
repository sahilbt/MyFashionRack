import Image from "next/Image"
import Modal from "./Modal.jsx"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function ProfilePost(props){
    const [modal, setModal] = useState(false)
    console.log(modal)
    function handleClick(){
        setModal(() => !modal)
    }
    return(
        <div onClick={handleClick} className="w-full aspect-square">
            <div className="bg-black relative -z-10 w-full h-full">
                <Image alt="Outfit" className="object-cover rounded-lg" src={props.Image} fill/>
            </div>
            <AnimatePresence>
                {modal && <Modal data={props} modal={modal} handleClick={handleClick}/>}
            </AnimatePresence>
        </div>
    )
}