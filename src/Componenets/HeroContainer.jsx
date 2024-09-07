import React, {lazy, Suspense} from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Video = lazy(()=> import('./Video'));


const HeroContainer = () => {
  return (
     <div className='flex flex-col items-center justify-center'>
        
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-center">
                VirtualR build tools  
                <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'> 
                 &nbsp;for developer
                </span>
             </h1>

             <p className='mt-10 text-lg text-neutral-500 text-center max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our intuitive
                development tools. Get started today and turn your imagination into imersive reality!
             </p>

             
             <a className='my-10 flex items-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-500
                 to-orange-700 rounded-md  transition ease-in-out delay-150 hover:scale-110 hover:duration-500 duration-500' href="#">
                 Start Free {<FaArrowRight/>}
             </a>
             


             <Suspense fallback={<div>Loading...</div>}>    
                <Video/>
             </Suspense>
             
    
    </div>
  )
}

export default HeroContainer