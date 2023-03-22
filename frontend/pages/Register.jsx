import SignUp from "../components/SignUp.jsx";
import RegisterInformation from "../components/RegisterInformation.jsx"
import { useMultistepForm } from "./RegisterHook.jsx";
import { ReactElement, useState } from "react"


export default function Register() {
    const[page,setPage] = useState(0)
    const [form,setForm] = useState({email:"",password:"",verify:"",first:"",last:"",country:"",city:"",address:"",birthday:"",phone:"",display:""})

    function handler1(event){
        setForm(prevForm =>{
            return{
            ...prevForm,
            [event.target.name]:event.target.value
        }
    })}

    return (
        <form className="bg-darkGrey grid h-screen w-screen">
            {page==0 && <SignUp handler1 = {handler1} setPage = {setPage} form = {form}/>}
            {page==1 && <RegisterInformation handler1 = {handler1} setPage = {setPage} setForm = {setForm} form = {form}/>}
        </form>

    )
}