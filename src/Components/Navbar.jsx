import axios from 'axios';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCheckAuthentication from './Hooks/useCheckAuthentication';
import {PuffLoader} from 'react-spinners'

function Navbar() {

  // sticky nav
    const [stickyClass, setStickyClass] = useState("text-black");
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {isAuthenticated, loading} = useCheckAuthentication();
    

    function stickNavbar() {
      setIsSticky(window.scrollY > 100 ? true: false);
    }


    useEffect(() => {

      window.addEventListener('scroll', stickNavbar);

      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);


  return (
  
    <nav
      className={`w-full h-20 flex justify-center items-center max-sm:justify-evenly max-sm:px-4 fixed z-10 ${isSticky ? 'fixed backdrop-blur' : 'absolute bg-transparent'} font-poppins`}>

        <AnimatePresence>
          {
            isMenuOpen && (

                <motion.div initial={{height : 0}} animate={{height : '100vh'}} exit={{height : 0}} className='w-full h-screen absolute bg-white top-0 flex items-start justify-center p-4'>

                  {
                    isMenuOpen && (
                      <motion.div initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className='w-full h-1/2 flex flex-col items-start justify-start uppercase text-lg mt-28'>
                        <div className='w-full flex items-center justify-center'>
                          <Link className='w-[48%] hover:scale-105 transition py-3 flex items-center justify-center' to="/image-enhancement">Enhance</Link>
                          <hr className='h-1/2 border border-primary' />
                          <Link className='w-[48%] hover:scale-105 transition flex items-center justify-center' to="/image-analysis">Analyze</Link>
                        </div>
                        <div className='w-full flex items-center justify-center mt-12'>
                          <Link className='w-[48%] hover:scale-105 transition py-3 flex items-center justify-center' to="/pricing">Pricing</Link>
                          <hr className='h-1/2 border border-primary' />
                          <Link className='w-[48%] hover:scale-105 transition flex items-center justify-center' to="/about-us">About</Link>
                        </div>
                        <div className='w-full flex items-center justify-center mt-12'>
                          <Link className='w-[48%] hover:scale-105 transition py-3 flex items-center justify-center' to="/pricing">Contact</Link>
                          <hr className='h-1/2 border border-primary' />
                          <Link className='w-[48%] hover:scale-105 transition py-3 flex items-center justify-center' to="/pricing">Policy</Link>
                        </div>
                    </motion.div>
                    )
                  }


                </motion.div>

            )
          }
        </AnimatePresence>
        <div className='hidden max-sm:flex w-1/4 z-2'>

            {
              isMenuOpen ? (

                <AnimatePresence>

                  <motion.button initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 1}} onClick={() => setIsMenuOpen(false)}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/cancel-01-stroke-standard.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#609fc7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                  </motion.button>

                </AnimatePresence>

              ) : (
                <AnimatePresence>
                
                  <motion.button initial={{scale : 0.6, opacity : 0}} animate={{scale : 1, opacity : 1}} onClick={() => setIsMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/menu-02-stroke-standard.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                      <path d="M4 5L16 5" stroke="#609fc7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4 12L20 12" stroke="#609fc7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4 19L12 19" stroke="#609fc7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </motion.button>

                </AnimatePresence>
              )
            }

        </div>

        <div className='w-1/4 max-sm:w-1/2 h-full flex items-center justify-center z-2'>
            <Link to={'/'} className='text-3xl text-primary font-bold'>Pic<span className='text-light'>X</span></Link>
        </div>
        <div className='w-1/2 h-full flex items-center justify-evenly uppercase text-[17px] max-md:text-sm max-sm:hidden'>
            <Link className='hover:scale-105 transition' to="/image-enhancement">Enhance</Link>
            <Link className='hover:scale-105 transition' to="/image-analysis">Analyze</Link>
            <Link className='hover:scale-105 transition' to="/pricing">Pricing</Link>
            <Link className='hover:scale-105 transition' to="/about-us">About</Link>
            <Link className='hover:scale-105 transition' to="/contact-us">Contact</Link>
        </div>
        <div className='w-1/4 h-full flex items-center justify-center font-poppins font-medium text-md z-2'>
            {
              loading ? (
                <PuffLoader />
              ) : (
                isAuthenticated ? (
                  <h2>Authenticated</h2>
                ) : (
                  <Link to={"/user-login"} className=' px-7 py-2 flex items-center justify-center rounded-sm bg-linear-to-r from-primary to-light text-white duration-300 max-sm:text-sm max-sm:px-4'>Join Us</Link>
                )
              )
            }
        </div>
    </nav>
  )

}

export default Navbar
 