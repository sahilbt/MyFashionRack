import { motion } from "framer-motion"

export default function Backdrop({children, handleClick}){
    return(
        <motion.div onClick={handleClick}
            className="fixed top-0 left-0 bg-[#111111e1] w-screen h-screen flex justify-center items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            {children}
        </motion.div>
    )
}