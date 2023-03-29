import React from "react";
import { useEffect,useState  } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
Axios.defaults.withCredentials = true;
import { useAppContext } from "../context/userContext";

export default function googleLoading (){
    const { user, setUser } = useAppContext();
    const router = useRouter();
    useEffect(() => {
        const  google = async() => {
            await Axios.get(`${process.env.NEXT_PUBLIC_URL}/authentication/google/getGoogle`)
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
    
    return(
        <div>    
        </div>
    )
}