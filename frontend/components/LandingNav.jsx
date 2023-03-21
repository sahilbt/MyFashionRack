import Image from "next/Image"
import Logo from "../public/LogoWhite.png"
import Insta from "../public/instagram.svg"
import Twit from "../public/twitter.svg"
import Facebook from "../public/square-facebook.svg"
import Mail from "../public/envelope-solid.svg"
import Link from "next/Link"

export default function LandingNav(){
    return(
        <div className = "fixed flex flex-col items-center w-64 bg-pink inset-y-0 right-0 text-white">
            <Image
            className="h-52 w-auto mt-9"
                src = {Logo}
            />

            <div className="absolute flex flex-col gap-y-4 justify-center items-center h-screen">
                <Link href="/Login" className="text-2xl group">
                    Login
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>

                <Link href="/Register" className="text-2xl group">
                    Sign Up
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>

            </div>

            <div className="flex flex-col items-center absolute bottom-0">
                <a href="#" className="text-xl group mb-3">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </a>
                <div className="flex ml-6 mr-6 gap-6 mb-3">
                    <a href="#" className="group">
                        <Image
                            className="h-10"
                            src = {Insta}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="#" className="group">
                        <Image
                            className="h-10"
                            src = {Twit}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="#" className="group">
                        <Image
                            className="h-10"
                            src = {Facebook}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="#" className="group">
                        <Image
                            className="h-10"
                            src = {Mail}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                </div>
            </div>          
        </div>
    )
}