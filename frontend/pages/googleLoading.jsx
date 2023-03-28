import React from "react";
import { useEffect,useState  } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
Axios.defaults.withCredentials = true;

export default function googleLoading (){
    const router = useRouter();
    useEffect(() => {
        Axios.get("http://localhost:8000/authentication/google/googleCheck")
        .then(function (response) {
            console.log(response);
        })
        .catch(function(err){
            console.log(err)
        })
    },
    [])
    
    return(
        <div>    
        </div>
    )
}