import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import SignIn from "../components/SignIn.js"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-darkGrey">
            <div className="flex items-center w-screen content-center">
                <div className="w-1/2 scale-50 grid place-items-center">
                    <Image
                        src = {Logo}
                    />
                </div>
                <div className="w-1/2">
                    <SignIn />
                </div>
            </div>
        </div>
    )
}
