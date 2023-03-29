import Image from "next/Image"
import Logo from "../public/LogoWhite.png"
import Insta from "../public/instagram.svg"
import Twit from "../public/twitter.svg"
import Facebook from "../public/square-facebook.svg"
import Mail from "../public/envelope-solid.svg"
import Link from "next/Link"
import { useAppContext } from "../context/userContext"

export default function LandingNav(){
    const { user } = useAppContext();
    const logInPath = user._id ? "/users/me" : "/Login"
    const registerPath = user._id ? "/users/me" : "/Register"
    const ScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: y, behavior: "smooth"});
        }
    }
    return(
        <div className = "fixed flex flex-col items-center w-64 bg-pink inset-y-0 right-0 text-white">
            <Image
                className="h-52 w-auto mt-9"
                src = {Logo}
            />

            <div className="absolute flex flex-col gap-y-4 justify-center items-center h-screen">
                <Link href={logInPath} className="text-2xl group">
                    Login
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>

                <Link href={registerPath} className="text-2xl group">
                    Sign Up
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>

            </div>

            <div className="flex flex-col items-center absolute bottom-0">
                <div onClick={() => {ScrollTo("about")}} className="text-xl group mb-3 cursor-pointer">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </div>
                <div className="flex ml-6 mr-6 gap-6 mb-3">
                    <a href="https://www.instagram.com/myfashionrackapp/" className="group" target="_blank">
                        <Image
                            className="h-10"
                            src = {Insta}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="https://twitter.com/MFRackApp" className="group" target="_blank">
                        <Image
                            className="h-10"
                            src = {Twit}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="https://www.facebook.com/MyFashionRackApp/" className="group" target="_blank">
                        <Image
                            className="h-10"
                            src = {Facebook}
                        />
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </a>
                    <a href="mailto:myfashionrackapp@gmail.com" className="group">
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