import LandingNav from "../components/LandingNav"
import zod from "../public/unknown-5 2.jpeg"
import Image from "next/image"

export default function index(){
    return(
        <div className="flex h-screen justify-end items-center">
            <Image
                className="bg- absolute opacity-30 top-0 h-screen w-auto object-left object-cover left-0 overflow-x-auto"
                src = {zod}
            />
            <h1 className="text-4xl text-white">Hello World!</h1>
            <LandingNav />
        </div>
    )
}