import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"

export default function Modal({data, handleClick}){
    const renderLinks = data.Clothing.map(clothing => {
        return(
            <Link href={clothing.Link} className="bg-pink rounded-full px-3 text-xs">{clothing.Name}</Link>
        )
    })
    const renderStyles = data.Styles.map(style => {
        return(
            <div className="bg-pink rounded-full px-3 text-xs">
                {style}
            </div>
        )
    })
    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey w-3/5 h-2/3 grid grid-cols-2 rounded-lg">
                <div className="relative bg-black rounded-l-lg">
                    <Image alt="Outfit" className="object-contain" src={data.Image} fill />
                </div>
                <div className="flex flex-col w-full p-4 gap-3">
                    <div className="border-b border-[#4F4F4F] py-2 text-lg">
                        {data.Username}
                    </div>
                    <div className="text-lg">
                        Description
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 text-xs max-w-full h-[20%]">
                        {data.Description}
                    </div>
                    <div className="text-lg">
                        Pieces and Links
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 max-w-full h-[20%]">
                        <div className="flex flex-wrap gap-3">
                            {renderLinks}
                        </div>
                    </div>
                    <div className="text-lg">
                        Style Tags
                    </div>
                    <div className="border-b border-[#4F4F4F] pb-2 max-w-full h-[15%]">
                        <div className="flex flex-wrap gap-3">
                            {renderStyles}
                        </div>
                    </div>
                    <div className="flex mt-auto justify-between max-w-full">
                        <div>
                            {data.Date}
                        </div>
                        <div>
                            {data.Likes}
                        </div>
                    </div>
                </div>
            </motion.div>      
        </Backdrop>
    )
}