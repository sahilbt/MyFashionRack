import { useRouter } from 'next/router'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Compass from '../../../public/compass.svg'

export default function Style(params) {
    const router = useRouter()
    const style = router.query.style

    return(
        <div className='w-full'>
            <Navbar/>

            <div className="w-full flex flex-col justify-center items-center mt-10 text-white">
                <div className='text-4xl tracking-widest flex gap-x-8'>
                    <Image src={Compass}/>
                    Explore {style}
                </div>
                <div className="relative flex items-center justify-center mt-4 border border-t w-[50%]">
                    <div className="absolute px-5 bg-darkGrey text-white"></div>
                </div>

                
            </div>
        </div>
    )
};
