import Image from "next/image"
import Modal from "./Modal.jsx"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function ProfilePost(props){
    const [modal, setModal] = useState(false)
    function handleClick(){
        setModal(() => !modal)
    }
    return(
        <div>
            <div onClick={handleClick} className="w-full aspect-square">
                <div className="bg-black relative -z-10 w-full h-full rounded-lg">
                    <Image alt="Outfit" className="object-cover rounded-lg" src={props.pictureRef.url} fill/>
                </div>
                <AnimatePresence>
                    {modal && <Modal data={props} modal={modal} handleClick={handleClick}/>}
                </AnimatePresence>
            </div>
        </div>
    )
}