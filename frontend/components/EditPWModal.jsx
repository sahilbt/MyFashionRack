import Backdrop from "./Backdrop"
import { motion } from "framer-motion"
import Axios from "axios"
import { Avatar } from "@mui/material"
import { useState } from "react" 

export default function EditPWModal({handleClick}) {
    const [pw, setPW] = useState({pass: "", verify: ""})

    function changeHandler(e){
        setPW(prev => {
            return(
                {...prev, [e.target.name]: e.target.value}
            )
        })
    }

    function submitHandler(){
        if(pw.pass == pw.verify){
            console.log("fgrhefgherb")
        }
        else{
            return
        }
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="w-[28%] h-[40%] bg-lightGrey rounded-xl border-2 border-pink flex flex-col gap-10 justify-center items-center">
                <div className="w-2/3 text-center text-3xl">Set new password</div>

                <div className="flex flex-col gap-7">    
                    <input onChange={changeHandler} name="pass" value={pw.pass} placeholder="new password" type="password" className=" text-sm px-3 h-8 w-72 bg-lightGrey text-white rounded-3xl outline outline-white outline-1 focus:outline focus:outline-pink hover:outline hover:outline-pink"></input>
                    <input onChange={changeHandler} name="verify" value={pw.verify} placeholder="verify password" type="password" className=" text-sm px-3 h-8 w-72 bg-lightGrey text-white rounded-3xl outline outline-white outline-1 focus:outline focus:outline-pink hover:outline hover:outline-pink"></input>
                </div>

                <div className="flex gap-10">
                    <button onClick={handleClick} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Cancel
                    </button>
                    <button onClick={submitHandler} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Confirm
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
}
