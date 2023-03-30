import Backdrop from "./Backdrop"
import { motion } from "framer-motion"
import Axios from "axios"
import { useAppContext } from "../context/userContext"
import { useRouter } from "next/router"

export default function DeleteAccountModal({handleClick}) {
    const { user, setUser } = useAppContext()
    const router = useRouter()

    async function deleteAccount(event){
        try {
            event.preventDefault();
            const url = `${process.env.NEXT_PUBLIC_URL}/authentication/logout`;
            Axios.get(url)
            .then((response)=>{
                setUser({});
                cookies.remove('user', { path: '/' });
                cookies.remove('connect.sid', { path: '/' });
            })
            .catch((error)=>{
                console.log(error);
            })

            const response = await Axios.delete(`${process.env.NEXT_PUBLIC_URL}/users/deleteAccount`, { params: {
                userID: user._id
            }})
            if (response.status == 200) {
                router.push("/")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="w-1/4 h-1/3 bg-lightGrey rounded-xl border-2 border-pink flex flex-col justify-center items-center gap-14">
                <div className="w-2/3 text-center text-3xl">Are you sure you want to delete your account?</div>
                <div className="flex justify-center gap-10">
                    <button onClick={handleClick} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Cancel
                    </button>
                    <button onClick={deleteAccount} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Proceed
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
};