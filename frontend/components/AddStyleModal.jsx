import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"
import { useEffect, useState } from "react"


export default function AddPieceModal({setPost, handleClick}) {
    const [selected, setSelected] = useState({
        Streetwear: false,
        Formal: false,
        Workwear: false,
        Minimalist: false,
        Athleisure: false,
        Vintage: false,
        SecondHand: false,
        Cosplay: false,
        BusinessCasual: false,
        Loungewear: false
        }
    )
    
    function handleChange(event){

        setSelected(prev=>{
            return(
                {
                    ...prev, 
                    [event.target.name]: event.target.checked
                }
            )
        })
    }

    function clickHandler(){
        const styles = []
        for (const x in selected){
            if(selected[x] == true){
                styles.push(`${x}`)
            }   
        }

        setPost(prev => {
            return(
                {
                    ...prev,
                    styleTags: styles
                }
            )
        })
        handleClick()
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey flex flex-col items-center justify-center gap-8 w-[35%] h-[53%] rounded-xl text-white border-solid border-2 border-pink">
                <div className="">
                    Add some Styles
                </div>


                <div className="grid grid-rows-5 grid-cols-2 text-lg gap-12 -mt-3 w-[65%] ">
                    <label htmlFor="Streetwear" className="relative cursor-pointer">
                        <input type="checkbox" name="Streetwear" checked={selected.Streetwear} onChange={handleChange} id="Streetwear" className="peer sr-only"/>
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Streetwear
                        </span>
                    </label>

                    <label htmlFor="Formal" className="relative cursor-pointer">
                        <input type="checkbox" name="Formal" checked={selected.Formal} onChange={handleChange} id="Formal" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Formal
                        </span>
                    </label>

                    <label htmlFor="Workwear" className="relative cursor-pointer">
                        <input type="checkbox" name="Workwear" checked={selected.Workwear} onChange={handleChange} id="Workwear" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Workwear
                        </span>
                    </label>

                    <label htmlFor="Minimalist" className="relative cursor-pointer">
                        <input type="checkbox" name="Minimalist" checked={selected.Minimalist} onChange={handleChange} id="Minimalist" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Minimalist
                        </span>
                    </label>

                    <label htmlFor="Athleisure" className="relative cursor-pointer">
                        <input type="checkbox" name="Athleisure" checked={selected.Athleisure} onChange={handleChange} id="Athleisure" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Athleisure
                        </span>
                    </label>

                    <label htmlFor="Vintage" className="relative cursor-pointer">
                        <input type="checkbox" name="Vintage" checked={selected.Vintage} onChange={handleChange} id="Vintage" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Vintage
                        </span>
                    </label>

                    <label htmlFor="Second-Hand" className="relative cursor-pointer">
                        <input type="checkbox" name="SecondHand" checked={selected.SecondHand} onChange={handleChange} id="Second-Hand" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Second-Hand
                        </span>
                    </label>

                    <label htmlFor="Cosplay" className="relative cursor-pointer">
                        <input type="checkbox" name="Cosplay" checked={selected.Cosplay} onChange={handleChange} id="Cosplay" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Cosplay
                        </span>
                    </label>

                    <label htmlFor="Casual" className="relative cursor-pointer">
                        <input type="checkbox" name="BusinessCasual" checked={selected.BusinessCasual} onChange={handleChange} id="Casual" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Business Casual
                        </span>
                    </label>

                    <label htmlFor="Loungewear" className="relative cursor-pointer">
                        <input type="checkbox" name="Loungewear" checked={selected.Loungewear} onChange={handleChange} id="Loungewear" className="peer sr-only" />
                        <span className="absolute w-full text-center rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Loungewear
                        </span>
                    </label>
                </div>

                <button onClick={clickHandler} className="bg-pink text-white rounded-3xl w-52 h-8 mt-5 hover:bg-[#AA4E65] text-xl ">Use Selected Styles</button>
            </motion.div>
        </Backdrop>
    )
};
