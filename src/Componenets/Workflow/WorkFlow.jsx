import React from 'react'
import codeimg from '../../assets/code.jpg';
import {checklistItems} from './workflowData';
import { CheckCircle2 } from 'lucide-react';

const WorkFlow = () => {
  return (
    <div className='mt-20'>
       
        <h2 className='text-3xl md:text-6xl text-center tracking-wide'>Accelerate your 
            <span className='bg-gradient-to-r from-orange-500 to-orange-700
             text-transparent bg-clip-text font-medium'> coding workflow</span>
        </h2>


        <div className="flex flex-wrap justify-between mt-8 ">

            <div className='w-full md:w-1/2 p-2'>
            <img src={codeimg} />
            </div>

            <div className='w-full md:w-1/2 px-2 py-5 '>

            {
                checklistItems.map((data, i)=> (
                   <div key={i} className='flex mb-12'>

                            <div className='text-green-400 mx-6 p-2 h-12 w-12  bg-slate-900 rounded-full
                              flex items-center justify-center'>
                                <CheckCircle2/>
                              </div>

                              <div>
                                <h5 className='mt-1 mb-2 text-xl'>{data.title}</h5>
                                <p className='text:md text-slate-500'>{data.description}</p>
                              </div>

                   </div>
                              

                   
       
                ))
            }

            </div>

            </div>
        </div>


   
  )
}

export default WorkFlow