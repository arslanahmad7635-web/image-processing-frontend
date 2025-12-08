import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

  return (

    <nav className='w-full h-20 flex justify-center items-center bg-blue-700'>
        <div className='w-1/4 h-full flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-white'>Pic<span className='text-cyan-300'>X</span></h1>
        </div>
        <div className='w-1/2 h-full flex items-center justify-evenly'>
            <Link className='text-white text-lg' to="/">Home</Link>
            <Link className='text-white text-lg' to="/about-us">About</Link>
            <Link className='text-white text-lg' to="/pricing">Pricing</Link>
            <Link className='text-white text-lg' to="/contact-us">Contact</Link>
        </div>
        <div className='w-1/4 h-full flex items-center justify-center'>
            <Link to={"/user-login"} className='px-7 py-2 bg-white flex items-center justify-center rounded-sm'>Join Us</Link>
        </div>
    </nav>

  )

}

export default Navbar