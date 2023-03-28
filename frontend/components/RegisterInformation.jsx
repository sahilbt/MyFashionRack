import { ReactElement, useState,useEffect} from "react";
import Axios from "axios";
import { useRouter } from 'next/router';
Axios.defaults.withCredentials = true;
import { useAppContext } from "../context/userContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function RegisterInformation({handler2,setPage,setform2,form2,steps,currentStepIndex,step,back,next,goto,isFirstStep,isLastStep,width,file,setFile,setSelectedLocation,filePath,setFilePath}) {

    const[disable,setDisable] = useState(true);
    const[validPhone,setValidPhone] = useState(true);
    const router = useRouter();
    const { user, setUser } = useAppContext();

    const emptyFieldToast = () => {
        toast.error('Please fill out all required fields', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "EmptyFieldRegister",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    const emptyPhotoToast = () => {
        toast.error('Please choose a Profile Picture', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "EmptyPicture",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    const validPhoneToast = () => {
        toast.error('Invalid Phone Number', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "InvalidPhone",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    const invalidNameToast = () => {
        toast.error('Name already exists', {
            position: toast.POSITION.TOP_RIGHT,
            toastId: "InvalidName",
            style: {
                backgroundColor: '#353535',
                color: '#DF6684'
              },
        });
    };

    useEffect(()=>{
        if(currentStepIndex === 0){
            
            if(!form2.first||!form2.last){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
        else if(currentStepIndex === 1){
            if(!form2.country||!form2.state){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
        else if(currentStepIndex === 2){
            if(!form2.birthday||!form2.phone){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
            if(form2.phone.match(/^\+1 \(\d{3}\) \d{3}-\d{4}$/)===null){
                setValidPhone(true);
            }
            else{
                setValidPhone(false);
            }
        }

        else if(currentStepIndex === 4){
            if(!form2.display){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
    },[form2]);

    useEffect(()=>{
       if(currentStepIndex === 3){
            if(file==undefined){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
    },file);
    const registerButton = async(event) => {

        if(user.displayName){
            router.push('/users/me');
        }

        event.preventDefault();
        const url = "http://localhost:8000/authentication/addUserDetail";
        const registerInformation = {
            userID: user._id,
            firstName: form2.first,
            lastName: form2.last,
            displayName: form2.display,
            address:{
                country:form2.country,
                city: form2.city ,
                street: form2.address
            },
            birthday: form2.birthday,
            phoneNumber: form2.phone
        };
        Axios.patch(url, registerInformation)
          .then(function (response) {
            if(response.status === 200){
                setUser(response.data.userDetails);
                router.push('/users/me');
            }
          })
          .catch(function (error) {
            //invalidNameToast();
            alert("hi");
          });
    }


    const backPage = () => {
        if(currentStepIndex === 1){
            setform2({...form2,first:"",last:"",country:"",state:""})
            setSelectedLocation({...setSelectedLocation,country:null,state:null})
        }
        else if(currentStepIndex === 2){
            setform2({...form2,country:"",state:"",birthday:"",phone:""})
            setSelectedLocation({...setSelectedLocation,country:null,state:null})
            setValidPhone(true)
        }
        else if(currentStepIndex === 3){
            setform2({...form2,birthday:"",phone:""})
            setFile(undefined)
            setFilePath(undefined)
            setValidPhone(true)
        }
        else if(currentStepIndex === 4){
            setform2({...form2,display:""})
            setFile(undefined)
            setFilePath(undefined)

        }
        setDisable(true);
        setValidPhone(true);
        back()
    }

    const nextPage = () => {

        if(currentStepIndex==0 && disable){
            emptyFieldToast();
        }
        else if(currentStepIndex==1 && disable){
            emptyFieldToast();
        }
        else if((currentStepIndex==2&&disable)||(currentStepIndex==2&&validPhone)){
            if(disable)
            emptyFieldToast()
            else if(validPhone){
            validPhoneToast()
            }
        }
        else if(currentStepIndex==3 && disable){
            emptyPhotoToast()
        }
        else if(currentStepIndex==4 && disable){
            emptyPhotoToast()
        }
        else{
            setDisable(true);
            next(); 
        }
        
    }

    


    return(
            
            <div className="w-3/4 m-auto flex flex-col justify-center">
                {step}
                <div className="py-20 m-auto flex flex-end gap-x-12">
                    {!isFirstStep && <button type = "button" onClick = {backPage} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">back</button>}
                    {!isLastStep && <button  type = "button" onClick = {nextPage} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">next</button>}
                    <ToastContainer hideProgressBar={true}/>
                                    <style>
                                    {
                                    `.Toastify__toast--error .Toastify__toast-icon svg path {
                                        fill: #DF6684;
                                    }`}
                                    </style>
                    {isLastStep && <button  className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]" onClick = {registerButton}>Submit</button>}
                </div>
            </div>

    )
}