import { useState } from "react"
import { motion } from "framer-motion"
import X from "../public/xmark-solid.svg"
import Image from "next/Image"
import Axios from "axios";
import Link from "next/Link";
import { Avatar } from "@mui/material";
import { useAppContext } from "../context/userContext";


export default function SearchBar({ setSearchBar }) {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([""])
    const { user } = useAppContext()
    async function submitHandler(e) {
        if(search.length > 0){
            e.preventDefault()
            const url = `${process.env.NEXT_PUBLIC_URL}/users/search`;
            
            await Axios.get(url, {params:{
                keyword: search
                }
            })
            .then(function (response) {
                if(response.status == 200){
                    setResults(response.data);
                }  
            })
            .catch(function(error){
                console.log(error)
            })
        } else{
            e.preventDefault()
            setResults([])
        }
    }
    const renderResults = (results.length > 0) ? results.map(result => {
            if(result == ""){
                return 
            } else{
            return (
                <Link className="p-2 text-2xl hover:bg-lightGrey flex items-center" href={ result.displayName == user.displayName ? "/users/me" :"/users/" + result.displayName}>
                    <Avatar 
                        className="mr-3"
                        src = {result.pictureRef.url}
                        sx={{ width: 40, height: 40 }}
                    />
                    
                    {result.displayName}
                </Link>
            )}
        }): <div className="text-2xl">No Results Found</div>
    

    return (
        <motion.div
            className="fixed h-screen w-[27%] bg-darkGrey border-r-4 border-lightGrey z-10 p-7"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.4 }}
        >
            <form onSubmit={submitHandler} className="w-full">
                <div className="flex justify-between mb-7 items-center">
                    <div className="text-white text-4xl">Search</div>
                    <Image src={X} className="w-auto h-11 cursor-pointer hover:scale-[1.2] duration-75" onClick={() => { setSearchBar(prev => !prev) }} />
                </div>
                <input value={search} onChange={(event) => { setSearch(event.target.value) }} placeholder="Search for a user"
                    className="px-4 h-12 w-full bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"
                />
            </form>
            <div className="relative flex items-center justify-center mt-10 mb-5 border border-[#4F4F4F] w-full rounded-full" />
            <div className="flex flex-col gap-3 overflow-y-scroll h-[78%] scrollbar-hide">
                {renderResults}
            </div>
        </motion.div>
    )
}