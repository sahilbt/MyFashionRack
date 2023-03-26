import Navbar from "../../components/Navbar"
import ProfilePost from "../../components/ProfilePost"
import posts from "../../posts"

export default function UserProfile(){
   
    const renderPosts = posts.map(post => {
        return(
            <ProfilePost {...post}/>
        )
    })
    return(
        <div className="w-full">
            <Navbar />
            <div className="w-full flex justify-center items-center mt-10">
                <div className="w-4/5 flex justify-between">
                    <div className="flex flex-col gap-9">
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                            
                        </div>
                        <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">

                        </div>
                    </div>
                    <div className="w-2/3 h-20 pb-4 ">
                        <h1 className="w-full text-center text-white text-4xl">
                           Your Wardrobe
                        </h1>
                        <h1 className="w-full text-center text-[#808080] text-3xl">
                            40 Outfits
                        </h1>
                        <div className=" mt-4 border w-full"></div>
                        <div className="grid grid-cols-3 grid-flow-row gap-9 mt-10">
                            {renderPosts}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}