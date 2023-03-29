import Backdrop from "./Backdrop"
import { motion } from "framer-motion"
import Axios from "axios"
import { Avatar } from "@mui/material"
import { useState } from "react"
import { useAppContext } from "../context/userContext"



export default function EditProfilePictureModal({handleClick}) {
    const {user} = useAppContext()
    const [file, setFile] = useState();
    const [filePath, setFilePath] = useState();
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    async function handleChange(e) {
        setFilePath(URL.createObjectURL(e.target.files[0]));
        const fileIn = e.target.files[0];
        const base64 = await convertToBase64(fileIn);
        setFile(base64)
    }


    async function handleSubmit(){
        try {
            const response = await Axios.patch("http://localhost:8000/users/updateProfilePicture", {
                image: file, 
                userId: user._id
            })
            if (response.status == 200) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="w-[40%] h-[55%] bg-lightGrey rounded-xl border-2 border-pink flex flex-col gap-10 justify-center items-center">
                <div className="w-2/3 text-center text-3xl">Select a new profile picture</div>
                <div className="relative flex items-center justify-center w-[200px] h-[200px]  bg-lightGrey rounded-full border-dashed border-2 border-pink  hover:bg-[#515151]">
                    <label htmlFor="dropzone-file" className="w-full h-full flex flex-col justify-center items-center cursor-pointer" >
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} accept="image/*" />
                        <Avatar
                            src = {filePath}
                            sx={{ width: 200, height: 200 }}
                        />
                    </label>
                </div>

                <div className="flex gap-10">
                    <button onClick={handleClick} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Cancel
                    </button>
                    <button  onClick={handleSubmit} className="bg-pink text-white rounded-3xl w-28 h-8 hover:bg-[#AA4E65] text-xl">
                        Confirm
                    </button>
                </div>
            </motion.div>
        </Backdrop>
    )
}
