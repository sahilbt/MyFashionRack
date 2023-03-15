import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"

export default function Modal({data, handleClick}){
    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey w-3/5 h-2/3 relative grid grid-cols-2 ">

                <div className="relative bg-black">
                    <Image alt="Outfit" className="object-contain" src={data.Image} fill />
                </div>


                    {/* <div className="w-1/2">
                        fedfdf
                    </div> */}

                <div className="flex-col ">
                    <div>
                        {data.Username}
                    </div>
                    <div>
                        {data.Description}
                    </div>

                    <div>
                        {data.Date}
                    </div>

                    <div>
                        {data.Likes}
                    </div>
                </div>


            </motion.div>
            
        </Backdrop>
    )
}