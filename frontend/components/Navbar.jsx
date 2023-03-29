import Image from "next/Image"
import Link from "next/Link"
import Logo from "../public/NavLogo.png"
import AddButton from "../public/add-button.svg"
import LogOutButton from "../public/logout-button.svg"
import AccountButton from "../public/account-button.svg"
import Axios from "axios";
import { useRouter } from 'next/router';
import { useAppContext } from "../context/userContext";
import Cookies from 'universal-cookie';
import Search from "../public/magnifying-glass-solid.svg"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import SideBar from "../components/SearchBar"
import { motion } from "framer-motion"


export default function Navbar() {
    const router = useRouter();
    const { setUser } = useAppContext();
    const cookies = new Cookies();

    const logOutButtonFunction = (event) => {
        event.preventDefault();
        const url = "http://localhost:8000/authentication/logout";
        Axios.get(url)
        .then((response)=>{
            setUser({});
            cookies.remove('user', { path: '/' });
            cookies.remove('connect.sid', { path: '/' });
            router.push('/');
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const [searchBar, setSearchBar] = useState(false)
    const variants = {
        open: { rotate: 360, transition:{duration:0.4}},
        closed: { rotate: 0, transition:{duration:0.4}},
    }
    return(
        <div>
            <div className='w-full  h-20  text-white bg-pink'>
                <AnimatePresence>
                    {searchBar && <SideBar setSearchBar={setSearchBar}/>}
                </AnimatePresence>
                <div className="grid place-items-center">
                    <div className="flex justify-between items-center h-20 w-[80%]">     
                        <div className="flex items-center space-x-6">
                            <Link href="/feed">
                                <Image
                                    className="w-auto h-14 hover:scale-[1.1] duration-75"
                                    src = {Logo}
                                />
                            </Link>
                            <motion.div
                                animate={searchBar ? "open" : "closed"}
                                variants={variants}
                            >
                                <Image src={Search} className="w-auto h-10 cursor-pointer hover:scale-[1.2] duration-75" onClick={() => {setSearchBar(prev => !prev)}}/>
                            </motion.div>
                        </div>    
                        <div className="flex space-x-14">
                            <div className="grid place-items-center gap-y-1">
                                <Link href="/create">
                                    <Image
                                        className="w-auto h-10 hover:scale-[1.2] duration-75"
                                        src={AddButton}
                                    />
                                </Link>
                                <div className="text-xs">
                                    New Post 
                                </div>
                            </div>

                            <div className="grid place-items-center gap-y-1">
                                <Image
                                    className="w-auto h-10 hover:scale-[1.2] duration-75"
                                    src={LogOutButton}
                                    onClick={logOutButtonFunction}
                                />
                                <div className="text-xs">
                                    Logout
                                </div>
                            </div>

                            <div className="grid place-items-center gap-y-1">
                                <Link href="/users/me">
                                    <Image
                                        className="w-auto h-10 hover:scale-[1.2] duration-75"
                                        src={AccountButton}
                                    />
                                </Link>
                                <div className="text-xs">
                                    Account
                                </div>
                            </div>                 

                        </div>
                    </div>         
                </div>
            </div> 
        </div>
    )
}
