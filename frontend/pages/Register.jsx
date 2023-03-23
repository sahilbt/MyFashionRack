import SignUp from "../components/SignUp.jsx";
import RegisterInformation from "../components/RegisterInformation.jsx"
import { useMultistepForm } from "./RegisterHook.jsx";
import { ReactElement, useState } from "react"
import { motion } from "framer-motion"



export default function Register() {
    const[page,setPage] = useState(0)
    const [form,setForm] = useState({email:"",password:"",verify:"",first:"",last:"",country:"",city:"",address:"",birthday:"",phone:"",display:""})
    
    const {steps,currentStepIndex,step, back,next,goto,isFirstStep,isLastStep,getWidth,width} = useMultistepForm([
        <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Tell us your Name</h1>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="first" placeholder="first name" value = {form.first} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" onChange={handler1}/> 
                </div>
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="last" placeholder="last name" value = {form.last}className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                </div>
            </div>
        </div>,
            <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Where do you Live</h1>
            <div className="flex flex-col item justify-center items-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                            <input type="text" name="country" placeholder="country" value = {form.country} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                            <input type="text" name="city" placeholder="city" value = {form.city} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                            <input type="text" name="address" placeholder="address" value = {form.address}className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                </div>
            </div>
        </div>,
          <div>
          <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Some Additional Information</h1>
          <div className="flex flex-row item justify-center">
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="date" name="birthday" placeholder="birthday"  value = {form.birthday} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/>
              </div>
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
              <input type="text" name="phone" placeholder="phone number" value = {form.phone} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
              </div>
          </div>
      </div>,
         <div>
         <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >What do you want Others to Call you</h1>
             <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2 m-auto">
             <input type="text" name="display" placeholder="display name" value = {form.display} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
             </div>
     </div>,

    
    ]);

    function handler1(event){
        setForm(prevForm =>{
            return{
            ...prevForm,
            [event.target.name]:event.target.value
        }
    })}



    return (
    <div className="w-full h-screen bg-grey">
        <div className="h-2 overflow-hidden w-full rounded-full position absolute">
                        <motion.div className="h-2 px rounded-full bg-pink origin-top-left " style={{width: '0%'}}
                        animate={{
                            width: ((currentStepIndex+page)/steps.length) * 100 + '%'
                        }}
                        transition={{
                            duration: 1.5
                        }}>
                        </motion.div>
                        </div>
        <form className=" h-full flex flex-col justify-center items-center text-center">
            {page==0 && <SignUp handler1 = {handler1} setPage = {setPage} form = {form}/>}
            {page==1 && <RegisterInformation handler1 = {handler1} setPage = {setPage} setForm = {setForm} form = {form} steps = {steps} 
            currentStepIndex = {currentStepIndex} step = {step} back = {back} next = {next} goto = {goto} isFirstStep = {isFirstStep} isLastStep = {isLastStep} width={width}/>}
        </form>
    </div>

    )
}