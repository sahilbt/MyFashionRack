import Link from "next/Link"
import Navbar from "../components/Navbar"

export default function Feed() {
    return(
        <div className="mt-32 flex justify-center">
            <Navbar />
            <div className="w-10/12">
                <div className="text-white flex justify-between items-center h-9 bg-lightGrey rounded-xl outline outline-1 outline-pink px-24">
                    <Link href="#" className="group">
                        Streetwear
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Workwear
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Minimalist
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Formal
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Athleisure
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Vintage
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                    <Link href="#" className="group">
                        Second-hand
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                    </Link>
                </div>

                <div className="flex h-96 ">
                    <div className="bg-lightGrey h-96 w-60 rounded-xl outline outline-1 outline-pink">
                        
                    </div>
                
                    <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                    
                    </div>
                    
                    <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}



