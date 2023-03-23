import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAppContext } from "../context/userContext";

export default function create(params) {
    const {user} = useAppContext()
    const [post, setPost] = useState(
        {
            userID: user._id,
            description: "",
            image: 0,
            outfitPieces: [],
            styleTags:[] 
        }
    )
    function descHandler(event){
        setPost(prev => {
            return(
                {
                    ...prev,
                    description: event.target.value
                }
            )
        })
    }
    return(
        <div className="w-full h-screen">
            <Navbar/>
            <div className="w-full flex flex-col justify-center items-center mt-10 text-white">
                <div className='text-4xl tracking-widest flex gap-x-8'>
                    Create Post
                </div>
                <div className="relative flex items-center justify-center mt-6 border border-t w-[65%]"></div>
                <div className="flex w-[65%] gap-10 justify-center my-10">
                    <div className="w-1/2 h-[500px] bg-lightGrey rounded-lg border-dashed border-2 border-pink">

                    </div>
                    <div className="w-1/2 h-[500px] flex flex-col gap-3">
                        <div className="h-1/3">
                            <h1 className="text-2xl">
                                Add a description.
                            </h1>
                            <textarea onChange={descHandler} maxLength={300} placeholder="Add your description here!" className="resize-none bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5 text-sm">

                            </textarea>
                        </div>
                        <div className="h-1/3">
                            <h1 className="text-2xl">
                                Can you link some of your pieces?
                            </h1>
                            <div className="bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5">

                            </div>
                        </div>
                        <div className="h-1/3">
                            <h1 className="text-2xl">
                                What style(s) are you going for?
                            </h1>
                            <div className="bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[65%] flex">
                    <button className="bg-pink rounded-full px-2 py-1 ml-auto">
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    )
}

