import RegisterInformation from "../components/RegisterInformation.jsx"
import {useMultistepForm}  from "../hooks/RegisterHook.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from '@mui/material'
import { Country, State, City }  from 'country-state-city';
import Select from "react-select";
import { PatternFormat } from 'react-number-format';
import Axios from "axios";
import { fontWeight } from "@mui/system";
import { useAppContext } from "../context/userContext";
import { useEffect } from "react";
import { useRouter } from 'next/router';







export default function RegisterDetails() {
    const [form2,setform2] = useState({first:"",last:"",country:"",state:"",birthday:"",phone:"",display:""})
    const [filePath, setFilePath] = useState()
    const[file,setFile] = useState()
    const [selectedLocation, setSelectedLocation] = useState({country:null,state:null})
    const[rendered,setRendered] = useState(false)
    const router = useRouter();
    const { user } = useAppContext();
    const {isLoading} = useAppContext();

    
    useEffect(() => {
      if(isLoading)
          return
      else if(!user._id&&!isLoading){
        router.push('/');
      }
      else{
        setRendered(true)
      }
    }, [user._id,isLoading]);


      const countryOptions=[
      {
        name: "USA",
        isoCode: 'US',
      },
      {
        name: "Canada",
        isoCode: 'CA',
      },
    ]
    

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        backgroundColor: '#353535',
        border: state.isFocused ? '1px solid darkGrey' : '1px solid grey',
        borderRadius: '1.5rem',
        boxShadow: state.isFocused ? '0 0 5px grey' : 'none',
        '&:hover': {
          borderColor: state.isFocused ? 'darkGrey' : 'grey'
        },
        minHeight: '3.5em'
      }),
      menuList: (provided, state) => ({
        ...provided,
        borderRadius: '1.5rem',
        backgroundColor: '#353535',
        border: '1px solid #ccc',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        padding: 0,
        listStyle: 'none',
        maxHeight: '200px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: 0,
          height: 0
        }
      }),
      menu: (provided) => ({
        ...provided,
        borderRadius: '1.5rem',
      }),
      option: (provided, state) => ({
        ...provided,
        padding: '10px',
        cursor: 'pointer',
        backgroundColor:state.isFocused ? 'grey' : '#353535',
        color: state.isSelected ? '#FFFFFF' : '#FFFFFF',
        '&:active': {
          backgroundColor: '#575757'
        },


      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: '#FFFFFF'
      }),
      placeholder: (provided, state) => ({
        ...provided,
        color: '#FFFFFF'
      }),
    };

    async function handleChangeFile(e) {
      if(e.target.files.length !== 0){
        setFilePath(URL.createObjectURL(e.target.files[0]));
        const fileIn = e.target.files[0];
        const base64 = await convertToBase64(fileIn);
        setFile(base64)
      }
    }
    
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    
    const theme = createTheme({
        components: {
          
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  fontFamily: '__Bree_Serif_daf8a0,__Bree_Serif_Fallback_daf8a0',
                  fontWeight: '400'
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
          MuiSvgIcon:{
            styleOverrides:{
              root:{
                fill:'#DF6684'
              }
            }
          },
          MuiOutlinedInput:{
            styleOverrides: {
              root: {
                color : '#FFFFFF'
              }
            }
          },
          MuiDateCalendar:{
            styleOverrides:{
              root:{
                backgroundColor: '#353535',
                color:'#FFFFFF',
                borderRadius: '10px',
                overflow: 'hidden',
              },
            }
          },
          MuiPaper:{
            styleOverrides:{
              root:{
                backgroundColor: '#353535',
                borderRadius: '10px',
                color:"#FFFFFF"
              }
            }
          },
          MuiPickersDay:{
            styleOverrides:{
              root:{
                color:'#FFFFFF',
                '&.Mui-selected':{
                  backgroundColor:'#DF6684',
                },
                '&:hover': {
                  backgroundColor: '#DF6684'
                },
                '&:focus': {
                  backgroundColor: '#DF6684',
                  '&.Mui-selected':{
                    backgroundColor:'#DF6684',
                  },
              },           
            },
          },
        },
          MuiDayCalendar:{
            styleOverrides:{
              weekDayLabel:{
                color:'#FFFFFF'
              }
            }
          },
          MuiYearCalendar:{
            styleOverrides:{
              root:{
                '&::-webkit-scrollbar': {
                  width: 0,
                  height: 0
                },
              }
            }
          },
          MuiPickersYear:{
            styleOverrides:{
            yearButton:{
                color:'#FFFFFF',
                '&.Mui-selected':{
                  backgroundColor:'#DF6684',
                  '&:hover': {
                    backgroundColor: '#DF6684'
                  },
                },
                '&:hover': {
                  backgroundColor: '#DF6684'
                },
                '&:focus': {
                  backgroundColor: '#DF6684',
                  '&.Mui-selected':{
                    backgroundColor:'#DF6684',
                }
              },     
            }
          },
        },
        }
      })

      

    const {steps,currentStepIndex,step, back,next,goto,isFirstStep,isLastStep,getWidth,width,length} = useMultistepForm([
        <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Tell us your name!</h1>
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
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Where do you live?</h1>
            <div className="flex flex-col item justify-center items-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                <Select
                styles = {customStyles}
                  placeholder="country"
                  options={countryOptions}
                  getOptionLabel={(options) => {
                    return options["name"];
                  }}
                  getOptionValue={(options) => {
                    return options["name"];
                  }}
                  value={selectedLocation.country}
                  onChange={(newValue) => {
                    console.log(newValue)
                    setSelectedLocation(prevLocation=>({
                      ...prevLocation,
                      country:newValue,
                      state:null
                    }))
                    setform2(prevform2 =>({
                      ...prevform2,
                      country : newValue.name,
                      state : ""

                  }))}
                }
                />
                <Select
                  styles = {customStyles}
                  placeholder="state/province"
                  
                  options={State?.getStatesOfCountry(selectedLocation.country?.isoCode)}
                  getOptionLabel={(options) => {
                    return options["name"];
                  }}
                  getOptionValue={(options) => {
                    return options["name"];
                  }}
                  value={selectedLocation.state}
                  onChange={(newValue) => {
                    setSelectedLocation(prevLocation=>({
                      ...prevLocation,
                      state:newValue
                    }))
                    setform2(prevform2 =>({
                      ...prevform2,
                      state : newValue.isoCode
                    }))}}
                />   
                </div>
            </div>
          </div>,
          <div>
          <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Can you provide some additional information?</h1>
          <div className="flex flex-row item justify-center">
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
              <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" 
                       slotProps={{
                        textField: {
                          placeholder: 'birthdate',
                          font: 'Bree_Serif',
                        },
                        
                      }}
                    disableHighlightToday = {true}
                    selected = {true}
                    format="MMMM D, YYYY"
                    onChange={(newValue)=>{
                        setform2(prevform2 =>({
                        ...prevform2,
                        birthday : moment(new Date(newValue)).format('YYYY-MM-DD')

                }))}}/>
                </LocalizationProvider>
                </ThemeProvider>
              </div>
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                
              <PatternFormat
                    className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"
                    type="tel"
                    format="+1 (###) ###-####" 
                    mask="_" 
                    placeholder="phone number"
                    onValueChange={(newValue)=>{
                      setform2(prevform2 =>({
                      ...prevform2,
                      phone : newValue.formattedValue

              }))}}
                    required
                  />
              </div>
          </div>
          </div>,
        <div className=" w-full h-full flex-col flex justify-center items-center ">
          <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Please add a Profile Picture</h1>
          <div className="relative flex flex-col justify-center items-center w-[350px] h-[350px] bg-lightGrey rounded-full  hover:bg-[#515151]">
              <label htmlFor="dropzone-file" className="w-full h-full flex flex-col justify-center items-center bg-cover cursor-pointer" >
                  <div className="flex flex-col items-center justify-center w-full h-full">
                      <Avatar alt=""
                      sx={{ width: '350px', height: '350px' }}/>
                  </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleChangeFile} accept="image/*" />
                    <div class=" absolute w-full h-full bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${filePath})` }}></div>
              </label>
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
      <>
      {rendered &&(
      <div className="w-full h-screen bg-grey overflow-hidden">
          <div className="h-2 overflow-hidden w-full rounded-full absolute">
                          <motion.div className="h-2 px rounded-full bg-pink origin-top-left " style={{width: '0%'}}
                          animate={{
                              width: ((currentStepIndex)/steps.length) * 100 + '%'
                          }}
                          transition={{
                              duration: 1
                          }}>
                          </motion.div>
          </div>
          <form className=" h-full w-full flex justify-between items-center">
              <RegisterInformation handler2 = {handler2} setform2 = {setform2} form2 = {form2} steps = {steps} 
              currentStepIndex = {currentStepIndex} step = {step} back = {back} next = {next} goto = {goto} isFirstStep = {isFirstStep} isLastStep = {isLastStep} width={width} file = {file}
              setFile = {setFile} setSelectedLocation = {setSelectedLocation} filePath = {filePath} setFilePath = {setFilePath} />
          </form>
      </div>
        )}
      </>
    )
}