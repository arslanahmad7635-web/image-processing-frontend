import React from 'react'

function Navbar() {

  return (

    <nav className='w-full h-20 flex justify-center items-center bg-teal-300'>
        <div className='w-1/4 h-full bg-black flex items-center justify-center'>
            <h1>1</h1>
        </div>
        <div className='w-1/2 h-full bg-orange-300 flex items-center justify-center'>
            <h1>1</h1>
        </div>
        <div className='w-1/4 h-full bg-cyan-300 flex items-center justify-center'>
            <h1>1</h1>
        </div>
    </nav>

  )

}

export default Navbar