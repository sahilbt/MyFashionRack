import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import Google from "../public/google.svg"
import Link from "next/Link"
import { useState } from "react"
import { useRouter } from 'next/router';
import { useAppContext } from "../context/userContext";

import Axios from "axios";
Axios.defaults.withCredentials = true;

export default function Login() {
    
    const[fields,setFields] = useState({username: "", password: ""})
    const router = useRouter();
    const { setUser } = useAppContext();

    const logInButton = (event) => {
        event.preventDefault();
        const url = "http://localhost:8000/authentication/login";
        Axios.post(url, fields )
          .then(function (response) {
            if(response.status === 200){
                setUser(response.data.userDetails)
                router.push('/users/me');
            }
          })
          .catch(function (error) {
            console.log(error);
            
          });
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen text-center bg-darkGrey">
            <div className="flex w-full items-center content-center">
                <div className="w-full grid place-items-center">
                    <div className="w-28 mb-6">
                        <Link href="/">
                            <Image
                                className="w-auto"
                                src = {Logo}
                            />
                        </Link>
                    </div>
                    <h1 className="text-3xl text-white text-center pb-5">Login</h1>
                    <div className="flex flex-col items-center gap-y-6">
                        <input type="email" name="email" placeholder="email" 
                        onChange={(e)=> {setFields({...fields, username: e.target.value})}}
                        className="px-4 h-12 w-96 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <input type="password" name="password" placeholder="password" 
                        onChange={(e)=> {setFields({...fields, password: e.target.value})}}
                        className="px-4 h-12 w-96 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        <button className="bg-pink text-white rounded-3xl w-48 h-12 hover:bg-[#AA4E65]" onClick={logInButton}>
                            Login
                        </button>
                     <div className="relative flex items-center justify-center mt-4 border border-t w-96">
                        <div className="absolute px-5 bg-darkGrey text-white">OR</div>
                    </div>
                    <button className="bg-darkGrey text-white rounded-3xl mt-4 w-64 h-12 outline outline-2 outline-white hover:outline-pink">
                        <Image src = {Google} className="h-1/2 w-auto inline-block mr-3"/>
                        Continue with Google
                    </button>
                    <div className="flex text-white">
                        <div>Don't have an account?</div>
                            <Link href="/SignUp" className="group text-pink pl-3">
                                Sign Up Here!
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-pink"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
