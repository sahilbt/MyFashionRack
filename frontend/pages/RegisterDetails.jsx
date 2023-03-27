import RegisterInformation from "../components/RegisterInformation.jsx"
import {useMultistepForm}  from "../hooks/RegisterHook.jsx";
import { useState } from "react";
import { motion } from "framer-motion"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function RegisterDetails() {
    const [form2,setform2] = useState({first:"",last:"",country:"",city:"",address:"",birthday:"",phone:"",display:""})

   
    const theme = createTheme({
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#ffffff', 
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              sizeMedium: {
                color : '#DF6684'
              }
            }
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                color : '#DF6684'
              }
            }
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color : '#DF6684'
              }
            }
          }
        }
      });
    
      

    const {steps,currentStepIndex,step, back,next,goto,isFirstStep,isLastStep,getWidth,width} = useMultistepForm([
        <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Tell us your Name</h1>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="first" placeholder="first name" value = {form2.first} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" onChange={handler2}/> 
                </div>
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="last" placeholder="last name" value = {form2.last}className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
                </div>
            </div>
        </div>,
            <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Where do you Live</h1>
            <div className="flex flex-col item justify-center items-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                            <input type="text" name="country" placeholder="country" value = {form2.country} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
                            <input type="text" name="city" placeholder="city" value = {form2.city} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
                            <input type="text" name="address" placeholder="address" value = {form2.address}className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
                </div>
            </div>
        </div>,
          <div>
          <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Some Additional Inform2ation</h1>
          <div className="flex flex-row item justify-center">
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
              <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" 
                       renderInput={(params) => (
                        <TextField
            {...params}
          />
                      )}
                    inputformat="dd.MM.yyyy"
                    onChange={(newValue)=>{
                        setform2(prevform2 =>({
                        ...prevform2,
                        birthday : moment(new Date(newValue)).format('L')

                }))}}/>
                </LocalizationProvider>
                </ThemeProvider>
              </div>
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
              <input type="text" name="phone" placeholder="phone number" value = {form2.phone} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
              </div>
          </div>
      </div>,
         <div>
         <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >What do you want Others to Call you</h1>
             <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2 m-auto">
             <input type="text" name="display" placeholder="display name" value = {form2.display} className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler2}/> 
             </div>
     </div>,
    ])

    function handler2(event){
        
        setform2(prevform2 =>{
            return{
            ...prevform2,
            [event.target.name]:event.target.value
        }
    })}



    return (
    <div className="w-full h-screen bg-grey">
        <div className="h-2 overflow-hidden w-full rounded-full position absolute">
                        <motion.div className="h-2 px rounded-full bg-pink origin-top-left " style={{width: '0%'}}
                        animate={{
                            width: ((currentStepIndex)/steps.length) * 100 + '%'
                        }}
                        transition={{
                            duration: 1.5
                        }}>
                        </motion.div>
        </div>
        <form className=" h-full flex flex-col justify-center items-center text-center">
             <RegisterInformation handler2 = {handler2} setform2 = {setform2} form2 = {form2} steps = {steps} 
            currentStepIndex = {currentStepIndex} step = {step} back = {back} next = {next} goto = {goto} isFirstStep = {isFirstStep} isLastStep = {isLastStep} width={width}/>
        </form>
    </div>

    )
}