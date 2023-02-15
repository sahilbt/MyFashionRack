import LandingNav from "../components/LandingNav"
import zod from "../public/unknown-5 2.jpeg"
import Image from "next/image"

export default function index(){
    return(
        <div className="flex h-screen justify-end items-center">
            <Image
                className="-z-10 absolute opacity-30 top-0 h-screen w-auto object-left object-cover left-0 overflow-x-auto"
                src = {zod}
            />
            <div className="mr-14 flex flex-col items-center">
                <h1 className="text-5xl text-white text-center">Elevate Your Style</h1>
                <p className="max-w-xs text-white text-lg text-center mt-6">
                    Follow, share and view your favorite outfits from your favorite influencers and friends.
                </p>
            </div>
            <LandingNav />
        </div>
    )
}