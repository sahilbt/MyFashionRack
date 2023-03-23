import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import Google from "../public/google.svg"
import Link from "next/Link"


export default function SignUp({handler1,setPage,form}) {
    
    function nextPage(){
        setPage(1);
    }


    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex w-full items-center content-center">
                <div className="w-full grid place-items-center">
                    <div className="w-28 mb-6">
                        <Link href="/">
                            <Image
                                className="w-auto"
                                src = {Logo}
                            />
                        </Link>
                    </div>
                    <h1 className="text-3xl text-white text-center pb-5">Sign Up</h1>
                    <div className="flex flex-col items-center gap-y-6">
                        <input type="email" name="email" placeholder="email" className="px-4 h-12 w-96 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" onChange={handler1}/>
                        <input type="password" name="password" placeholder="password" className="px-4 h-12 w-96 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/>
                        <input type="password" name="verify" placeholder="verify password" className="px-4 h-12 w-96 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/>
                            <button  disabled={!form.email||!form.password||!form.verify} type = "button" onClick = {nextPage} className="bg-pink text-white rounded-3xl w-48 h-12 hover:bg-[#AA4E65]">
                                Sign Up
                            </button>
                        <div className="relative flex items-center justify-center mt-4 border w-96">
                            <div className="absolute px-5 bg-darkGrey text-white">OR</div>
                        </div>
                        <button className="bg-darkGrey text-white rounded-3xl mt-4 w-64 h-12 outline outline-2 outline-white hover:outline-pink">
                            <Image src = {Google} className="h-1/2 w-auto inline-block mr-3"/>
                            Continue with Google
                        </button>
                        <div className="flex text-white">
                            <div>Already have an account?</div>
                            <Link href="/Login" className="group text-pink pl-3">
                                Login Here!
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-pink"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
