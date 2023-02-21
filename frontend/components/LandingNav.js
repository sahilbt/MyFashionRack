import Image from "next/image"
import Logo from "../public/LogoWhite.png"
import Insta from "../public/instagram.svg"
import Twit from "../public/twitter.svg"
import Facebook from "../public/facebook-f.svg"
import Mail from "../public/envelope-solid.svg"

export default function LandingNav(){
    return(
        <div className = "fixed flex flex-col items-center w-64 bg-pink inset-y-0 right-0 text-white">
            <Image
            className="h-52 w-auto mt-9"
                src = {Logo}
            />

            <div className="absolute flex flex-col gap-y-4 justify-center items-center h-screen">
                <div className="text-center">
                    <a href="#" className="text-2xl group">
                        Login
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                </div>
                <div className="text-center">
                    <a href="#" className="text-2xl group">
                        Sign Up
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>

                </div>

            </div>

            <div className="flex absolute bottom-0">
                <div className="text-center">
                    <a href="#" className="text-xl group">
                        About
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                </div>

                <div className="flex ml-6 mr-6 gap-6">
                    <a href="#">
                        <Image
                            className = "h-16"
                            src = {Insta}
                        />
                    </a>
                    <a href="#">
                        <Image
                            className = "h-16"
                            src = {Twit}
                        />
                    </a>
                    <a href="#">
                        <Image
                            className = "h-16"
                            src = {Facebook}
                        />
                    </a>
                    <a href="#">
                        <Image
                            className = "h-16"
                            src = {Mail}
                        />
                    </a>
                </div>
            </div>          
        </div>
    )
}