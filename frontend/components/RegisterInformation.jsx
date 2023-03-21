import { useMultistepForm } from "../pages/RegisterHook.jsx";

export default function RegisterInformation({handler1,setPage}) {

    function nextPage(){
        setPage(0);
    }
    const { steps,currentStepIndex,step, back,next,goto,isFirstStep,isLastStep,getWidth} = useMultistepForm([
        <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Tell us your Name</h1>
            <div className="flex flex-row item justify-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="first" placeholder="first name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]" onChange={handler1}/> 
                </div>
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="last" placeholder="last name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                </div>
            </div>
        </div>,
            <div>
            <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Where do you Live</h1>
            <div className="flex flex-col item justify-center items-center">
                <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                            <input type="text" name="country" placeholder="country" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                            <input type="text" name="city" placeholder="city" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                            <input type="text" name="address" placeholder="address" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
                </div>
            </div>
        </div>,
          <div>
          <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >Some Additional Information</h1>
          <div className="flex flex-row item justify-center">
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
                    <input type="text" name="age" placeholder="age" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/>
              </div>
              <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2">
              <input type="text" name="phone" placeholder="phone number" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
              </div>
          </div>
      </div>,
         <div>
         <h1 className="text-5xl text-white pb-1 text-center tracking-widest mb-7" >What do you want Others to Call you</h1>
             <div className="flex flex-col gap-y-12 flex-grow p-10 w-1/2 m-auto">
             <input type="text" name="display" placeholder="display name" className="px-4 h-14 bg-lightGrey text-white rounded-3xl outline-white outline-2 focus:outline focus:outline-white hover:outline hover:outline-[#464646]"onChange={handler1}/> 
             </div>
     </div>,

    
    ]);
    return(

            <div className="w-3/4 m-auto flex flex-col justify-center">
                {step}
                <div className="py-20 m-auto flex flex-end gap-x-12">
                    {isFirstStep && <button type = "button" onClick = {nextPage} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">back</button>}
                    {!isFirstStep && <button type = "button" onClick = {back} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">back</button>}
                    {!isLastStep && <button type = "button" onClick = {next} className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">next</button>}
                    {isLastStep && <button className="bg-pink text-white rounded-3xl w-48 h-14 hover:bg-[#AA4E65]">Submit</button>}
                </div>
            </div>

    )
}