import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"

export default function AddPieceModal({data, handleClick}) {
    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey flex flex-col items-center justify-center gap-8 w-[35%] h-[53%] rounded-xl text-white border-solid border-2 border-pink">
                <div className="">
                    Add a Style
                </div>


                <div className="grid grid-rows-5 grid-cols-2 text-lg gap-5">
                    <label for="Streetwear" className="cursor-pointer ">
                        <input type="checkbox" id="Streetwear" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Streetwear
                        </span>
                    </label>

                    <label for="Formal" className="cursor-pointer">
                        <input type="checkbox" id="Formal" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Formal
                        </span>
                    </label>

                    <label for="Workwear" className="cursor-pointer">
                        <input type="checkbox" id="Workwear" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Workwear
                        </span>
                    </label>

                    <label for="Minimalist" className="cursor-pointer">
                        <input type="checkbox" id="Minimalist" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Minimalist
                        </span>
                    </label>

                    <label for="Athleisure" className="cursor-pointer">
                        <input type="checkbox" id="Athleisure" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Athleisure
                        </span>
                    </label>

                    <label for="Vintage" className="cursor-pointer">
                        <input type="checkbox" id="Vintage" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Vintage
                        </span>
                    </label>

                    <label for="Second-Hand" className="cursor-pointer">
                        <input type="checkbox" id="Second-Hand" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Second-Hand
                        </span>
                    </label>

                    <label for="Cosplay" className="cursor-pointer">
                        <input type="checkbox" id="Cosplay" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Cosplay
                        </span>
                    </label>

                    <label for="Casual" className="cursor-pointer">
                        <input type="checkbox" id="Casual" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Casual
                        </span>
                    </label>

                    <label for="Loungewear" className="cursor-pointer">
                        <input type="checkbox" id="Loungewear" className="peer sr-only" />
                        <span className="rounded-full bg-[#464646] text-[#7E7E7E] hover:bg-[#515151] peer-checked:bg-pink peer-checked:text-white">
                            Loungewear
                        </span>
                    </label>
                </div>


                <button className="bg-pink text-white rounded-3xl w-36 h-8 hover:bg-[#AA4E65] text-xl ">Add Style</button>

            </motion.div>


        </Backdrop>
    )
};
