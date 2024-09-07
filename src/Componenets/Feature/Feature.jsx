import React from 'react'
import {features}  from './featureData';

import { BotMessageSquare } from "lucide-react";


const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>

         <div className='text-center'>
          <span className='px-3 py-2 h-6 text-lg bg-neutral-900 text-orange-500 font-medium rounded-full'>Feature</span>
        
          <h2 className='text-3xl sm:text-5xl md:text-6xl mt-10 md:mt-20 tracking-wide '>
            Easily Build <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-medium'> Your Code</span>
          </h2>
         </div>

         <div className='flex flex-wrap mt-14 md:mt-20'>
            {
                features.map((features, i)=> (
                    <div className='w-full md:w-1/3'>
                        <div className='flex px-6 '>

                            <div className='flex justify-center items-center mx-6 text-orange-700 h-10 w-10 bg-neutral-900 rounded-full'>
                                {features.icon}
                            </div>

                            <div className='flex flex-col gap-2'>
                               <h1 className='text-lg md:text-xl'>{features.text}</h1>
                               <p className='text-sm md:text-md p-2 mb-16 md:mb-20 text-neutral-400'>{features.description}</p>
                            </div>

                        </div>

                    </div>
                ))
            }

         </div>


    </div>
  )
}

export default Feature