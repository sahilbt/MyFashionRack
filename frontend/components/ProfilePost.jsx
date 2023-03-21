import Image from "next/Image"
import Modal from "./Modal.jsx"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function ProfilePost(){
    const [modal, setModal] = useState(false)
    console.log(modal)
    function handleClick(){
        setModal(() => !modal)
    }
    return(
        <div></div>
    )
}