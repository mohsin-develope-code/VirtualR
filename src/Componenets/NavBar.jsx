import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const NavBar = () => {

  const menuData = ["Feature", "WorkFlow", "Pricing", "Testimonial" ]

  const [openDrawer , setOpenDrawer] = useState(false);

  const drawerchange = ()=> {
   return setOpenDrawer(!openDrawer);
  }


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">

      <div className="container mx-auto px-4 relative text-sm">
        
        <div className="flex justify-between items-center">
          
            <div className="flex items-center flex-shrink-0">
                <img className='h-10 w-10 mr-2' src={logo} alt="LOGO" />
                <span className='text-xl tracking-tight'>VirtualR</span>
            </div>


            <ul className='hidden md:flex space-x-9'>
              {
                menuData.map((value)=> (
                  <li className='hover:text-orange-500 hover:font-bold hover:duration-100'>
                     <a href="#">{value}</a>
                  </li>
                ))
              }
            </ul>


            <div className="md:flex space-x-12 items-center justify center hidden">
               <a className='border px-3 py-2 rounded-md' href="#">
                  Sign in
               </a>

               <a className='bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md' href="#">
                  Creates an account
               </a>
            </div>


            <div className='md:hidden '>
               <button className='text-lg' onClick={drawerchange}>
               {openDrawer? <RxCross2/> : <FaBars/>}
               </button>
            </div>

        </div>


        {openDrawer && (<div className='md:hidden md:duration-200 right-0 z-20 fixed bg-neutral-900 w-full flex flex-col items-center p-12'>
          
          <ul>
            {
              menuData.map((value)=> (
                <li className='py-3 hover:text-orange-500 hover:font-bold hover:duration-100'>
                  <a href="#">{value}</a>
                </li>
                ))
            }
          </ul>

          <div className='flex space-x-6 mt-3 items-center justify-center'>
              <a className='border px-3 py-2 rounded-md' href="#">
                 Sign in
              </a>

              <a className='bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md' href="#">
                 Creates an account
              </a>
          </div>

        </div> 
        
        )}

      </div>
    </nav>

  )
}

export default NavBar