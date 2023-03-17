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
            <AnimatePresence>
                {modal && <Modal data={props} modal={modal} handleClick={handleClick}/>}
            </AnimatePresence>
            <div className="bg-lightGrey p-2 rounded-t-xl">
                <h1>{props.Username}</h1>
            </div>
            <Image onClick={handleClick} alt="Outfit" src={props.Image} width = {480} height = {200}/>
            <div className="bg-lightGrey p-2 rounded-b-xl flex justify-between">
                <h1>{props.Description}</h1>
                <h1>{props.Likes}</h1>
            </div>
        </div>
    )
}