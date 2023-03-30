import { useRouter } from 'next/router'
import Image from 'next/Image'
import Navbar from '../../../components/Navbar'
import Post from "../../../components/Post"
import Compass from '../../../public/compass.svg'
import { useAppContext } from '../../../context/userContext'
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Style(params) {
    const router = useRouter();
    const[style,setStyle] = useState();
    const {user} = useAppContext();
    const [posts, setPosts ]  = useState([]);
    const [rendered,setRendered] = useState(false)
    const {isLoading} = useAppContext(false);



    useEffect(()=>{
        setStyle(router.query.style);
        if(!style){
            console.log("Not ready");
        }else{
            Axios.get("http://localhost:8000/users/postsFromStyle", {params:{
                stylename: style,
                }
            })
            .then(function (response) {
                console.log(response);
                if(response.status == 200){
                    setPosts(response.data);
                }  
            })
            .catch(function(error){
                console.log(error)
            })
        }   
    }, [style]);

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


    const renderPosts = posts.map(post => {
        
        return(
            <Post props={post} page="style"/>
        )
    })

    return(
        <>{
            rendered&&(
                <div className='w-full'>
                    <Navbar/>
                    <div className="w-full flex flex-col justify-center items-center mt-10 text-white">
                        <div className='text-4xl tracking-widest flex gap-x-8'>
                            <Image src={Compass}/>
                            Explore {style}
                        </div>
                        <div className="relative flex items-center justify-center mt-4 border border-t w-[65%]">
                            <div className="absolute px-5 bg-darkGrey text-white"></div>
                        </div>

                        <div className='w-3/5 mt-11'>
                            <div className='grid grid-cols-3 grid-flow-row gap-11 pb-8'>
                                {renderPosts}
                            </div>
                        </div>    
                    </div>
                </div>
            )}
        </>
    )
}

Style.getInitialProps = async ({ query }) => {
    const { id } = query.style
    return { id }
}
