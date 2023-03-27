import { ReactElement, useState,useEffect} from "react";
import Axios from "axios";
import { useRouter } from 'next/router';
Axios.defaults.withCredentials = true;
import { useAppContext } from "../context/userContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RegisterInformation({handler2,setPage,setform2,form2,steps,currentStepIndex,step,back,next,goto,isFirstStep,isLastStep,width}) {

    const[disable,setDisable] = useState(true);
    const router = useRouter();
    const { user, setUser } = useAppContext();

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
            if(!form2.country||!form2.city||!form2.address){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
        else if(currentStepIndex === 2){
            if(!form2.birthday||!form2.phone||form2.phone.match("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$") == null){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
        else if(currentStepIndex === 3){
            if(!form2.display){
                setDisable(true);
            }
            else{
                setDisable(false);
            }
        }
    },[form2]);

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
            setform2({...form2,first:"",last:"",city:"",address:""})
        }
        else if(currentStepIndex === 2){
            setform2({...form2,country:"",city:"",address:"",birthday:"",phone:""})
        }
        else if(currentStepIndex === 3){
            setform2({...form2,birthday:"",phone:"",display:""})
        }
        setDisable(true);
        back()
    }

    const nextPage = () => {
        setDisable(true);
        next();
    }


    return(
            
            <div className="w-3/4 m-auto flex flex-col justify-center">
                {step}
                <div className="py-20 m-auto flex flex-end gap-x-12">
                    {!isFirstStep && <button type = "button" onClick = {backPage} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">back</button>}
                    {!isLastStep && <button  disabled = {disable} type = "button" onClick = {nextPage} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">next</button>}
                    {isLastStep && <button  className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]" onClick = {registerButton}>Submit</button>}
                </div>
            </div>

    )
}