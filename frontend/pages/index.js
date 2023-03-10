import LandingNav from "../components/LandingNav"
import zod from "../public/unknown-52.jpeg"
import Image from "next/Image"
import Head from "next/Head"

export default function index(){
    return(
        <div>
            <Head>
                <title>MyFashionRack</title>
            </Head>
            
            <div className="h-screen">
                <Image
                    className="-z-10 fixed opacity-30 h-screen w-auto object-left object-cover left-0"
                    src = {zod}
                />
                <LandingNav />
                <div className="mr-14 flex fixed -z-10 flex-col justify-center items-center h-screen right-64">
                    <h1 className="text-5xl text-white text-center font-bold">Elevate Your Style</h1>
                    <p className="max-w-xs text-white text-lg text-center mt-6">
                        Follow, share and view your favorite outfits from your favorite influencers and friends.
                    </p>
                </div>
            </div>
            <div className="h-screen bg-darkGrey">
                
            </div>
                
        </div>
    )
}