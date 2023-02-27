export default function SignIn() {
    return(
        <div>
            <h1 className="text-4xl text-white text-center pb-5">Login</h1>
            <div className="flex flex-col items-center gap-y-6">
                <input type="email" name="email" placeholder="email" className="px-4 h-14 w-96 bg-lightGrey text-white rounded-3xl outline-white hover:ring-1 hover:ring-white focus:outline"/>
                <input type="password" name="password" placeholder="password" className="px-4 h-14 w-96 bg-lightGrey text-white rounded-3xl outline-white hover:ring-1 hover:ring-white focus:outline"/>

            </div>
        </div>
    )
}
