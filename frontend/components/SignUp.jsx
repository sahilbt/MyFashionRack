import Image from "next/Image"
import Logo from "../public/LogoPink.png"
import Google from "../public/google.svg"
import Link from "next/Link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
axios.defaults.withCredentials = true;
axios.defaults.headers["content-type"] = "application/json";
import { useRouter } from 'next/router';
import { useAppContext } from "../context/userContext";



export default function SignUp({handler1,form1}) {

    const router = useRouter();
    const { setUser } = useAppContext();

    const invalidEmailToast = () => {
        toast.error('Invalid Email', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "InvalidEmail",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    const emptyFieldToast = () => {
        toast.error('Please fill out all required fields', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "EmptyField",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    const diffPasswordToast = () => {
        toast.error('Passwords dont match', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "DifferentPassword",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    function signUpHandler(event){
        event.preventDefault();

        if((form1.email==='')||(form1.password==='')||(form1.verify===''))
            return emptyFieldToast()
        
        else if(form1.email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")===null){
            return invalidEmailToast()
        }

        else if(form1.password!=form1.verify){
            return diffPasswordToast()
        }

        else{
            const url = "http://localhost:8000/authentication/register";
            const registerInformation = {
                username: form1.email,
                password: form1.password
            };
            axios.post(url, registerInformation)
                .then(function (response) {
                    if(response.status === 200){
                        setUser(response.data.userDetails);
                        router.push('/RegisterDetails');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    if(error.response.status === 401){
                        invalidEmailToast();
                    }
                });
        }
        
    }

    const googleButton = (event) => {
        console.log("triggered");
        event.preventDefault();
        window.location.href = "http://localhost:8000/authentication/google";
    };

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
                            <button  type = "button" onClick = {signUpHandler} className="bg-pink text-white rounded-3xl w-48 h-12 hover:bg-[#AA4E65]">
                                Sign Up
                            </button>
                            <ToastContainer hideProgressBar={true} Limit={2}/>
                                    <style>
                                    {
                                    `.Toastify__toast--error .Toastify__toast-icon svg path {
                                        fill: #DF6684;
                                    }`}
                                    </style>
                        <div className="relative flex items-center justify-center mt-4 border w-96">
                            <div className="absolute px-5 bg-darkGrey text-white">OR</div>
                        </div>
                        <button className="bg-darkGrey text-white rounded-3xl mt-4 w-64 h-12 outline outline-2 outline-white hover:outline-pink"
                            >
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
