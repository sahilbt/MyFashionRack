
import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import Link from "next/link"


export default function Register() {
    return (
        <div className="bg-darkGrey grid h-screen w-screen ">
           <div className="w-3/4 m-auto flex flex-col justify-center">
                <h1 className="text-5xl text-white pb-1 text-center tracking-widest" >Personal Information</h1>
                <div className="flex flex-row item justify-center">
                        <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                                <input type="text" name="display name" placeholder="display name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                                <input type="text" name="first name" placeholder="first name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                                <input type="text" name="last name" placeholder="last name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                                <input type="text" name="phone number" placeholder="phone number" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                        </div>
                    <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                            <input type="text" name="country" placeholder="country" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <input type="text" name="city" placeholder="city" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <input type="text" name="address" placeholder="address" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                            <input type="text" name="age" placeholder="age" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                    </div>
            </div>

          <div className="py-20 m-auto">
          <Link href="Register">
                 <button className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">
                    Finish
                </button>
            </Link>
          </div>

        </div>
    </div>
    )
}
