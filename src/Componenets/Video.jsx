import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Video = () => {
  return (
    <div className='md:flex mt-10 justify-center'>
        <video autoPlay muted loop className='w-full md:w-1/2 rounded-lg border border-orange-600 shadow-orange-500 mx-2 my-4'>
              <source src={video1} type="video/mp4"/>
              Your browser doesn't support video tag
         </video>

        <video autoPlay muted loop className='w-full md:w-1/2  rounded-lg border border-orange-600 shadow-orange-500  mx-2 my-4 '>
              <source src={video2} type="video/mp4"/>
              Your browser doesn't support video tag
        </video> 
    </div>
  )
}

export default Video