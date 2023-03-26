import { useState } from "react";
import SignUp from "../components/SignUp.jsx";

export default function Register() {
    const [form1,setForm1] = useState({email:"",password:"",verify:""})

    function handler1(event){
        
        setForm1(prevForm1 =>{
            return{
            ...prevForm1,
            [event.target.name]:event.target.value
        }
    })}
    return (
        <div className="w-full h-screen bg-grey">
            <form className=" h-full flex flex-col justify-center items-center text-center">
                <SignUp handler1 = {handler1} form1 = {form1}/>
            </form>
        </div>
    
        )
    }