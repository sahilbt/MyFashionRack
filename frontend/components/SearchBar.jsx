import { useState } from "react"
import { motion } from "framer-motion"
import X from "../public/xmark-solid.svg"
import Image from "next/Image"

export default function SearchBar({ setSearchBar }) {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([""])
    function submitHandler(e) {
        e.preventDefault()
        setResults([])
        if(search.length > 0){
            usernames.map(index => {
                if (index.includes(search)) {
                    setResults(prev => {
                        return (
                            [...prev, index]
                        )
                    })
                }
            })
        }
    }
    const renderResults = (results.length > 0) ? results.map(result => {
            return (
                <a href="#" className="p-2 block text-2xl hover:bg-lightGrey">{result}</a>
            )
        }): <div className="text-2xl">No Results Found</div>
    
    const usernames = ["pp", "new", "lilbaby", "pppoopoo"]
    return (
        <motion.div
            className="fixed h-full w-[27%] bg-darkGrey border-r-4 border-lightGrey z-10 p-7"
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
            <div className="flex flex-col gap-3">
                {renderResults}
            </div>
        </motion.div>
    )
}