import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  // sticky nav
    const [stickyClass, setStickyClass] = useState("");

    function stickNavbar() {
      setStickyClass(window.scrollY > 150 ? "backdrop-blur" : "");
    }


    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);

      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

  return (
  
    <nav
      className={`w-full h-20 flex justify-center items-center bg-transparent fixed z-10 ${stickyClass}`}>
        <div className='w-1/4 h-full flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-white'>Pic<span className='text-cyan-300'>X</span></h1>
        </div>
        <div className='w-1/2 h-full flex items-center justify-evenly'>
            <Link className='text-white text-lg ' to="/">Home</Link>
            <Link className='text-white text-lg ' to="/about-us">About</Link>
            <Link className='text-white text-lg ' to="/pricing">Pricing</Link>
            <Link className='text-white text-lg ' to="/contact-us">Contact</Link>
        </div>
        <div className='w-1/4 h-full flex items-center justify-center font-poppins font-medium text-lg text-white'>
            <Link to={"/user-login"} className=' px-7 py-2 flex items-center justify-center rounded-sm bg-transparent border-2 border-white hover:bg-white transition-colors duration-300 border-transparent hover:border-white hover:text-black' >Join Us</Link>
        </div>
    </nav>
  )

}

export default Navbar
 