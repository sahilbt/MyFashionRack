import Image from "next/Image"
import { useState } from "react"

export default function Post(props){
    const [modal, setModal] = useState(false)
    function handleClick(){
        setModal(() => !modal)
    }
    return(
        <div>
        {modal && <modal />}
            <div className="bg-lightGrey p-2 rounded-t-md">
                <h1>{props.Username}</h1>
            </div>
            <Image onClick={handleClick} src={props.Image} width = {480} height = {200}/>
            <div className="bg-lightGrey p-2 rounded-b-md flex justify-between">
                <h1>{props.Description}</h1>
                <h1>{props.Likes}</h1>
            </div>
        </div>
    )
}