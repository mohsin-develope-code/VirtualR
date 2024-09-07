import React from 'react'

const Footer = () => {

  const footerData = ["Getting Started", "Documentation", "Tutorials", "API Reference", "Community Forms" ]
  const footerPlatform = ["Learning VR", "Explore VR", "API Reference" ]
  const footerCommunity = ["Join Us", "Help", "Explore Community"]



  return (
    <div className='mt-5 py-10 grid grid-cols-2 md:grid-cols-3 gap-10'>

        <div className='mx-10 flex flex-col gap-4'>
            <h1 className='text-md'>Resources</h1>
            
            <div className='flex flex-col gap-2 text-sm font-light text-neutral-400'>
              {
                 footerData.map((value)=> (
                   <a className='hover:text-white hover:duration-100' href="#">{value}</a>
                 ))
              }
            </div>
        </div>


        <div className='mx-10 flex flex-col gap-4'>
            <h1 className='text-md'>platform</h1>
            
            <div className='flex flex-col gap-2 text-sm font-light text-neutral-400'>
              {
                footerPlatform.map((value)=> (
                  <a className='hover:text-white hover:duration-100' href="#">{value}</a>
                ))
              }
            </div>
        </div>


        <div className='mx-10 flex flex-col gap-4'>
            <h1 className='text-md'>Community</h1>
            
            <div className='flex flex-col gap-2 text-sm font-light text-neutral-400'>
              {
                footerCommunity.map((value)=> (
                  <a className='hover:text-white hover:duration-100' href="#">{value}</a>
                ))
              }
            </div>
        </div>



        

    </div>
  )
}

export default Footer