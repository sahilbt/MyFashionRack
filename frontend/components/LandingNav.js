import Logo from "../public/LogoWhite.png"
import Image from "next/image"
export default function LandingNav(){
    return(
        <div className = "fixed flex justify-center w-64 bg-pink inset-y-0 right-0 text-white">
            <Image
            className="h-60 w-auto mt-10"
                src = {Logo}
            />
        </div>
    )
}