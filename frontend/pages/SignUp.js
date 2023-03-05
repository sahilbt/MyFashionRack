import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import Link from "next/link"


export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-darkGrey">
            <div className="flex w-screen items-center content-center">
                <div className="w-1/2 grid place-items-center">
                    <Image
                        className="scale-75"
                        src = {Logo}
                    />
                </div>
                <div className="w-1/2">
                    <div>
                        <div className= "w-1/2 m-auto">
                            <h1 className="text-4xl text-white pb-5 text-left" >Sign Up</h1>
                        </div>
                        <div className="flex flex-col items-center gap-y-10">
                            <input type="email" name="email" placeholder="email" className="px-4 h-14 w-[50%] bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <input type="password" name="password" placeholder="password" className="px-4 h-14 w-[50%] bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <input type="password" name="verifyPassword" placeholder="verify password" className="px-4 h-14 w-[50%] bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <Link href="Register">
                                <button className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">
                                    Sign Up
                                </button>
                            </Link>

                            <div className="relative flex items-center justify-center mt-4 border border-t w-[50%]">
                                <div className="absolute px-5 bg-darkGrey text-white">OR</div>
                            </div>
                            <button className="bg-darkGrey text-white rounded-3xl mt-4 w-[30%] h-14 outline outline-2 outline-white hover:outline-pink">
                                Continue with Google
                            </button>
                            <div className="flex text-white">
                                <div>Already Have An Account?</div>
                                <Link href="Login" className="group text-pink pl-3">
                                    Login Here!
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-pink"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
