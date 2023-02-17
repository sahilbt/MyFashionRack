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
            <a href="#" className="text-2xl mt-20">Login</a>
            <a href="#" className="text-2xl">Sign Up</a>
            <a href="#" className="text-xl mt-56">About</a>
            <div className="flex ml-6 mr-6 gap-6">
                <a href="#">
                    <Image
                        className = "h-24"
                        src = {Insta}
                    />
                </a>
                <a href="#">
                    <Image
                        className = "h-24"
                        src = {Twit}
                    />
                </a>
                <a href="#">
                    <Image
                        className = "h-24"
                        src = {Facebook}
                    />
                </a>
                <a href="#">
                    <Image
                        className = "h-24"
                        src = {Mail}
                    />
                </a>
            </div>
        </div>
    )
}