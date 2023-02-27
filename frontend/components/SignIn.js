import Link from "next/Link"

export default function SignIn() {
    return(
        <div>
            <h1 className="text-4xl text-white text-center pb-5">Login</h1>
            <div className="flex flex-col items-center gap-y-6">
                <input type="email" name="email" placeholder="email" className="px-4 h-14 w-[50%] bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                <input type="password" name="password" placeholder="password" className="px-4 h-14 w-[50%] bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"/>
                <button className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">
                    Login
                </button>
                <div className="relative flex items-center justify-center mt-4 border border-t w-[50%]">
                    <div className="absolute px-5 bg-darkGrey text-white">OR</div>
                </div>
                <button className="bg-darkGrey text-white rounded-3xl mt-4 w-[30%] h-14 outline outline-2 outline-white hover:outline-pink">
                    Continue with Google
                </button>
                <div className="flex text-white">
                    <div>Don't have an account?</div>
                    <Link href="#" className="group text-pink pl-3">
                        Sign Up Here!
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-pink"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}



