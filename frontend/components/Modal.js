import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

export default function Modal({data, handleClick}){
    return(
        <Backdrop handleClick={handleClick}>
            <motion.div
                onClick={(event) => event.stopPropagation()}
                className="bg-lightGrey w-1/2 h-1/2"
            >
            <h1>{data.Username}</h1>
            </motion.div>
        </Backdrop>
    )
}