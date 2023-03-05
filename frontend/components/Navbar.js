import Image from "next/Image"
import Link from "next/Link"
import Logo from "../public/NavLogo.png"
import AddButton from "../public/add-button.svg"
import LogOutButton from "../public/logout-button.svg"
import AccountButton from "../public/account-button.svg"

export default function Navbar(params) {
    return(
        <div>
            <div className='w-screen flex justify-between items-center h-24 px-44 text-white bg-pink'>
                <div className="flex items-center space-x-6">
                    <Link href="/Feed">
                        <Image
                            className="w-auto h-14"
                            src = {Logo}
                        />
                    </Link>
                    <input type="text" name="search" placeholder="" className="px-4 h-10 w-80 bg-[#DE839A] text-white rounded-3xl outline outline-white outline-2 focus:outline focus:outline-white "/>
                </div>
                

                <div className="flex space-x-14">
                    <div className="grid place-items-center gap-y-1">
                        <Link href="#">
                            <Image
                                className="w-auto h-10"
                                src={AddButton}
                            />
                        </Link>
                        <div className="text-xs">
                            New Post
                        </div>
                    </div>


                    <div className="grid place-items-center gap-y-1">
                        <Link href="#">
                            <Image
                                className="w-auto h-10"
                                src={LogOutButton}
                            />
                        </Link>
                        <div className="text-xs">
                            Logout
                        </div>
                    </div>

                    <div className="grid place-items-center gap-y-1">
                        <Link href="#">
                            <Image
                                className="w-auto h-10"
                                src={AccountButton}
                            />
                        </Link>
                        <div className="text-xs">
                            Account
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    )
}
