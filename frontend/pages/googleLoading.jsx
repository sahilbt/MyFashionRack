import React from "react";
import { useEffect,useState  } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
Axios.defaults.withCredentials = true;
import { useAppContext } from "../context/userContext";

export default function googleLoading (){
    const { user, setUser } = useAppContext();
    const router = useRouter();
    const[rendered,setRendered] = useState(false)
    const {isLoading} = useAppContext();
    useEffect(() => {
        const  google = async() => {
            await Axios.get("http://localhost:8000/authentication/google/getGoogle")
            .then(function (response) {
                console.log(response.data)
                if(response.data.displayName){
                    setUser(response.data);
                    router.push('/users/me');
                    
                }else{
                    setUser(response.data);
                    router.push('/RegisterDetails');
                    
                }
            })
            .catch(function(err){
                console.log(err)
            })
        }

        google();
        
    },
    [])

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
    
    return(
        <div>    
        </div>
    )
}