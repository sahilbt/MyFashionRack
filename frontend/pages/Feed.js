import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Feed() {
    return(
        <div>
            <Navbar/>

            <div className='w-screen flex justify-between items-center px-44 text-white mt-10 '>
                
                <Link href="#">
                    Streetwear
                </Link>

                <Link href="#" >
                    Workwear
                </Link>

                <Link href="#">
                    Minimalist
                </Link>

                <Link href="#">
                    Athleisure
                </Link>

                <Link href="#">
                    Formal
                </Link>

                <Link href="#">
                    Vintage
                </Link>

                <Link href="#">
                    Second-hand
                </Link>
                

            </div>
        </div>
    )
}



