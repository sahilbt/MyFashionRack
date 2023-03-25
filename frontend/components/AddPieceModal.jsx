import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import Image from "next/Image"
import Link from "next/Link"
import { useState } from "react"

export default function AddPieceModal({setPost, handleClick}) {
    const [piece, setPiece] = useState({name:"", link:""})
    console.log(piece)
    function changeHandler(event){
        setPiece(prev=>{
            return(
                {
                    ...prev, 
                    [event.target.name]: event.target.value
                }
            )
        })
    }

    function clickHandler(){
        setPost(prev => {
            return(
                {
                    ...prev,
                    outfitPieces : [...prev.outfitPieces, {name: piece.name, link: piece.link}]
                }
            )
        })
        handleClick()
    }

    return(
        <Backdrop handleClick={handleClick}>
            <motion.div onClick={(event) => event.stopPropagation()} className="bg-lightGrey flex flex-col items-center justify-center gap-8 w-[30%] h-[45%] rounded-xl text-white border-solid border-2 border-pink">
                <div className="">
                    Add a Piece
                </div>


                <div className="flex flex-col ">
                    <h1 className="text-xl">Piece Name</h1>
                    <input placeholder="Write the name of your piece" name="name" onChange={changeHandler} value={piece.name} className="mt-1 text-sm px-2 h-8 w-72 bg-lightGrey text-white rounded-3xl outline outline-white outline-1 focus:outline focus:outline-pink hover:outline hover:outline-pink"></input>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-xl">Link to Piece</h1>
                    <input placeholder="Please start with http://" name="link" onChange={changeHandler} value={piece.link} className="mt-1 text-sm px-2 h-8 w-72 bg-lightGrey text-white rounded-3xl outline outline-white outline-1 focus:outline focus:outline-pink hover:outline hover:outline-pink"></input>
                </div>

                <button disabled={(piece.name.length == 0 && piece.link.length == 0) || !piece.link.startsWith("http://")} onClick={clickHandler} className="bg-pink text-white rounded-3xl w-36 h-8 hover:bg-[#AA4E65] text-xl ">Add Piece</button>

            </motion.div>
        </Backdrop>
    )
};
