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
            className="h-60 w-auto mt-9"
                src = {Logo}
            />

            <div className="absolute flex flex-col gap-y-4 justify-center items-center h-screen">
                <div className="text-center">
                    <a href="#" className="text-2xl">Login</a>
                </div>
                <div className="text-center">
                    <a href="#" className="text-2xl">Sign Up</a>
                </div>

            </div>

            <div className="flex-row absolute bottom-0">
                <div className="text-center">
                    <a href="#" className="text-xl">About</a>
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