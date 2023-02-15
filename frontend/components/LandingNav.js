import Logo from "../public/LogoWhite.png"
import Image from "next/image"
export default function LandingNav(){
    return(
        <div className = "fixed flex flex-col items-center w-64 bg-pink inset-y-0 right-0 text-white">
            <Image
            className="h-60 w-auto mt-9"
                src = {Logo}
            />
            <a href="#" className="no-underline text-white text-2xl mt-20">Login</a>
            <a href="#" className="no-underline text-white text-2xl">Sign Up</a>
            <a href="#" className="no-underline text-white text-xl mt-56">About</a>
            <div>
                
            </div>
        </div>
    )
}