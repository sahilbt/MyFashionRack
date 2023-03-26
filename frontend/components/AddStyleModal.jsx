import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"

export default function AddPieceModal({data, handleClick}) {
    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey flex flex-col items-center justify-center gap-8 w-[30%] h-[45%] rounded-xl text-white border-solid border-2 border-pink">
                <div className="">
                    Add a Style
                </div>


                <div className="flex flex-col ">
                    <h1 className="text-xl">Style</h1>
                    <input className="mt-1 text-sm px-2 h-8 w-72 bg-lightGrey text-white rounded-3xl outline outline-white outline-1 focus:outline focus:outline-pink hover:outline hover:outline-pink"></input>
                </div>


                <button className="bg-pink text-white rounded-3xl w-36 h-8 hover:bg-[#AA4E65] text-xl ">Add Style</button>

            </motion.div>


        </Backdrop>
    )
};
