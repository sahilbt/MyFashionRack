import { useState } from 'react'
import Navbar from '../components/Navbar'
import addButton from "../public/addPhoto.svg"
import Image from "next/Image"
import Link from "next/Link"
import addButton2 from "../public/add-button.svg"
import { AnimatePresence } from "framer-motion"
import AddPieceModal from '../components/AddPieceModal';
import AddStyleModal from '../components/AddStyleModal';
import X from '../public/xmark-solid.svg'
import Axios from "axios";
import { useAppContext } from '../context/userContext'
import { useRouter } from "next/router";
export default function create(params) {
    const router = useRouter();
    const { user } = useAppContext();
    
    const [modal, setModal] = useState(false)
    function handleClick(){
        setModal(() => !modal)
    }

    const [modal2, setModal2] = useState(false)
    function handleClick2(){
        setModal2(() => !modal2)
    }

    const [post, setPost] = useState(
        {
            user: user._id,
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

    function deleteHandler(param){
        var index = post.outfitPieces.indexOf(param)
        setPost(prev => {
            return(
                {
                    ...prev,
                    outfitPieces: prev.outfitPieces.filter(e => e != param)
                }
            )
        })
    }

    const [file, setFile] = useState();
    const [filePath, setFilePath] = useState();
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

    async function handleChange(e) {
        setFilePath(URL.createObjectURL(e.target.files[0]));
        const fileIn = e.target.files[0];
        const base64 = await convertToBase64(fileIn);
        setPost({ ...post, image: base64 });
    }

    

    const renderLinks = post.outfitPieces.map(clothing => {
        return(
            <div className="flex items-center">
                <Link href={clothing.link} className="bg-pink rounded-full px-3 py-[2px] text-sm group" target="_blank">
                    {clothing.name}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                </Link>
                <Image alt="" onClick={() => deleteHandler(clothing)} src={X} className="h-5 w-auto ml-1"/>
            </div>
        )     
    })

    const renderStyles = post.styleTags.map(style => {
        return(
            <div className="bg-pink rounded-full px-3 py-[2px] text-sm group">
                {style}
            </div>
        )
    })

    const addPostButton = (req,res) => {
        Axios.post("http://localhost:8000/users/create", post)
        .then(function (response) {
            router.push('/users/me');
        })
        .catch(function (error) {
            console.log(error);
        });
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
                    <div className="relative flex items-center justify-center w-1/2 h-[450px] bg-lightGrey rounded-lg border-dashed border-2 border-pink  hover:bg-[#515151]">
                        <label htmlFor="dropzone-file" className="w-full h-full flex flex-col justify-center items-center" >
                            <div className="flex flex-col items-center justify-center">
                                <Image alt="" src = {addButton}/>
                                <p className="text-sm">Click to upload an image!</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} accept="image/*" />
                            <img alt="" className="object-contain absolute max-w-full max-h-full" src={filePath}  />
                            
                        </label>
                    </div>
                    <div className="w-1/2 h-[450px] flex flex-col gap-3">
                        <div className="h-1/3">
                            <h1 className="text-2xl">
                                Add a description.
                            </h1>
                            <textarea onChange={descHandler} maxLength={300} placeholder="Add your description here!" className="resize-none bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5 text-sm"></textarea>
                        </div>
                        <div className="h-1/3">
                            <div className="text-2xl flex items-center ">
                                Can you link some of your pieces?
                                <Image alt="" className="pl-2 w-8 h-8 cursor-pointer" src={addButton2} onClick={handleClick}/>
                                <AnimatePresence>
                                    {modal && <AddPieceModal modal={modal} setPost={setPost} handleClick={handleClick}/>}
                                </AnimatePresence>
                            </div>
                            <div className="bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5">
                                <div className="flex flex-wrap gap-3">
                                    {post.outfitPieces.length != 0 && renderLinks}
                                </div>
                            </div>
                        </div>
                        <div className="h-1/3">
                        <div className="text-2xl flex items-center ">
                                What style(s) are you going for?
                                <Image alt="" className="pl-2 w-8 h-8 cursor-pointer" src={addButton2} onClick={handleClick2}/>
                                <AnimatePresence>
                                    {modal2 && <AddStyleModal setPost={setPost} modal={modal2} handleClick={handleClick2}/>}
                                </AnimatePresence>
                            </div>
                            <div className="bg-lightGrey border-solid border-2 border-pink rounded-md p-2 w-full h-4/5">
                                <div className="flex flex-wrap gap-3">
                                    {post.styleTags.length != 0 && renderStyles}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[65%] flex">
                    <button className="bg-pink rounded-full px-2 py-1 ml-auto -mt-5 hover:bg-[#AA4E65]"
                    onClick={addPostButton}>
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    )
}

