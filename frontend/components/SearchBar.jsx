import { useState } from "react"
import { motion } from "framer-motion"
import X from "../public/xmark-solid.svg"
import Image from "next/Image"

export default function SearchBar({setSearchBar}){
    const[search, setSearch] = useState("")
    function submitHandler(e){
        e.preventDefault()
        console.log(search)
    }
    return(
        <motion.div 
            className="fixed h-full w-[27%] bg-darkGrey border-r-4 border-lightGrey z-10 p-7 flex flex-col items-center "
            initial={{x:"-100vw"}}
            animate={{x:0}}
            exit={{x:"-100vw"}}
            transition={{duration: 0.4}}
        >
            <form onSubmit={submitHandler} className="w-full">
                <div className="flex justify-between mb-7 items-center">
                    <div className="text-white text-4xl">Search</div>
                    <Image src={X} className="w-auto h-11 cursor-pointer hover:scale-[1.2] duration-75" onClick={() => {setSearchBar(prev => !prev)}}/>
                </div>
                <input value={search} onChange={(event) => {setSearch(event.target.value)}} placeholder="Search for a user"
                    className="px-4 h-10 w-full bg-lightGrey border-2 border-white text-white rounded-3xl"
                />
            </form>
            <div className="relative flex items-center justify-center mt-10 border-2 border-[#4F4F4F] w-full rounded-full"></div>
            <div>

            </div>
        </motion.div>
    )
}