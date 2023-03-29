import Backdrop from "./Backdrop"
import { motion } from "framer-motion"
import Axios from "axios"

export default function DeletePostModal({handleClick, data}) {

    async function deletePost(){
        try {
            const response = await Axios.delete("http://localhost:8000/users/deletePost", { params: {
                postID: data._id
            }})
            if (response.status == 200) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="w-1/4 h-1/3 bg-lightGrey rounded-xl border-2 border-pink flex flex-col justify-center items-center gap-14">
                <div className="w-2/3 text-center text-3xl">Are you sure you want to delete this post?</div>
                <div className="flex justify-center gap-10">
                    <button onClick={handleClick} className="bg-pink text-white rounded-3xl w-36 h-8 hover:bg-[#AA4E65] text-xl">
                        Cancel
                    </button>
                    <button onClick={deletePost} className="bg-pink text-white rounded-3xl w-36 h-8 hover:bg-[#AA4E65] text-xl">
                        Proceed
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
};
