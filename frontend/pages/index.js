import LandingNav from "../components/LandingNav"
import zod from "../public/unknown-52.jpeg"
import Image from "next/Image"
import Head from "next/Head"
import Illustration1 from "../public/undraw_loving_it_re_jfh4.svg"
import Illustration2 from "../public/undraw_online_shopping_re_k1sv.svg"
import Illustration3 from "../public/undraw_shopping_re_hdd9.svg"
import Illustration4 from "../public/undraw_login_re_4vu2.svg"
import { motion } from "framer-motion"

export default function index(){
    return(
        <div>
            <Head>
                <title>MyFashionRack</title>
            </Head>
            
            <div className="h-screen">
                <Image
                    className="-z-10 fixed opacity-30 h-full w-auto object-left object-cover left-0"
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
            <div className="py-40 bg-darkGrey mr-64">
                <div className="flex flex-row justify-center items-center gap-y-3 gap-x-20 mb-24 h-64">
                    <motion.div className="w-1/3 h-auto"
                        initial={{x:-100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <Image src = {Illustration1}/>
                    </motion.div>
                    <motion.div className="text-white text-3xl max-w-md text-center min-h-full flex items-center justify-center"
                        initial={{x:100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <div>
                            See a fit that you're feeling? Give it a like so you can return to it later!
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-row justify-center items-center gap-y-3 gap-x-20 mb-24 h-64">
                    <motion.div className="text-white text-3xl max-w-md text-center min-h-full flex items-center justify-center"
                        initial={{x:-100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <div>
                            See a fit Only like specific pieces of the outfit? Don't worry, there are links to each individual article of clothing!
                        </div>
                    </motion.div>
                    <motion.div className="w-1/3 h-auto"
                        initial={{x:100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <Image src = {Illustration2}/>
                    </motion.div>
                </div>
                <div className="flex flex-row justify-center items-center gap-y-3 gap-x-20 mb-24 h-64">
                    <motion.div className="w-1/3 h-auto"
                        initial={{x:-100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <Image src = {Illustration3}/>
                    </motion.div>
                    <motion.div className="text-white text-3xl max-w-md text-center min-h-full flex items-center justify-center"
                        initial={{x:100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <div>
                            Only like certain styles? You can filter your feed to only show the selected style!
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-row justify-center items-center gap-y-3 gap-x-20 mb-24 h-64">
                    <motion.div className="text-white text-3xl max-w-md text-center min-h-full flex items-center justify-center"
                        initial={{x:-100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <div>
                            Ready to find new inspiration for your style? Create an account or log in today!
                        </div>
                    </motion.div>
                    <motion.div className="w-1/3 h-auto"
                        initial={{x:100}}
                        whileInView={{x:0}}
                        transition={{duration:0.7}}
                    >
                        <Image src = {Illustration4}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}