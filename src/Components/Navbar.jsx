import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  // sticky nav
    const [stickyClass, setStickyClass] = useState("text-black");
    const [isSticky, setIsSticky] = useState(false);

    function stickNavbar() {
      setStickyClass(window.scrollY > 150 ? "backdrop-blur" : "");
      setIsSticky(window.scrollY > 150 ? true: false);
    }


    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);

      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

  return (
  
    <nav
      className={`w-full h-20 flex justify-center items-center bg-transparent fixed z-10 ${stickyClass} font-poppins`}>
        <div className='w-1/4 h-full flex items-center justify-center'>
            <Link to={'/'} className='text-3xl text-primary font-bold'>Pic<span className='text-light'>X</span></Link>
        </div>
        <div className='w-1/2 h-full flex items-center justify-evenly uppercase'>
            <Link className='text-lg hover:scale-105 transition' to="/image-enhancement">Enhance</Link>
            <Link className='text-lg hover:scale-105 transition' to="/image-analyze">Analyze</Link>
            <Link className='text-lg hover:scale-105 transition' to="/pricing">Pricing</Link>
            <Link className='text-lg hover:scale-105 transition' to="/about-us">About</Link>
            <Link className='text-lg hover:scale-105 transition' to="/contact-us">Contact</Link>
        </div>
        <div className='w-1/4 h-full flex items-center justify-center font-poppins font-medium text-md'>
            <Link to={"/user-login"} className=' px-7 py-2 flex items-center justify-center rounded-sm bg-linear-to-r from-primary to-light text-white duration-300' >Join Us</Link>
        </div>
    </nav>
  )

}

export default Navbar
 