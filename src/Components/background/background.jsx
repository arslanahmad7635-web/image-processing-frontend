import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';

function Background() {

    const [isOpened, setIsOpened] = useState(false);

  return (
<section>
    
     <section className="w-full h-screen flex items-center justify-center align-center bg-[url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover relative">

        <div className="w-full h-full bg-linear-to-t from-cyan-500 to-transparent from-0% to-65% flex items-center justify-center">

            <div className="w-full flex items-center justify-center h-full relative">
                <h2 className="font-poppins font-bold text-4xl text-center text-white leading-14" style={{zIndex: 2}}>Empowering Users to Transform &<br />Analyze Image Effectively</h2>

            </div>
        </div>
                
    </section>

    <section className="w-full h-80 bg-cyan-500">

    </section>
    
    
    <section className='w-full h-screen bg-cyan-500 '>
        <div >
        <h1 className='mx-2 font-poppins font-bold text-4xl text-center text-black'style={{zIndex: 2}}>Transform Your Photos Instantly</h1>
        <p className=' py-8 mx-100 w-half  font-semibold font-poppins  text-xl  text-black justify-center align-center '>Bring your images to life with powerful AI-driven enhancement tools. Whether you need clearer details, sharper quality, or vibrant colors, our platform upgrades your photos in just seconds—no editing skills required.</p>

         </div>
         <div className=' mx-95 w-1/2  bg-transparent border rounded-md '>
                <img className='w-full h-100 border-cyan-500 border rounded-md shadow-sm' src="https://plus.unsplash.com/premium_photo-1674929041876-8c58c0a3f772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         </div>


    </section>
   
     <section className='w-full h-screen bg-cyan-500 '>
        <div >
        <h1 className='mx-2 font-poppins font-bold text-4xl text-center text-black'style={{zIndex: 2}}>Make Your Photos Shine</h1>
        <p className=' py-8 mx-100 w-half font-semibold font-poppins  text-xl  text-black justify-center align-center '>Enhance image quality with our advanced AI tools designed to sharpen details, restore clarity, and elevate every pixel. Perfect for photographers, designers, and anyone who wants their pictures to look flawless in seconds.</p>

         </div>
         
         <div className=' mx-95 w-1/2  bg-transparent border rounded-md '>
                <img className='w-full h-100 border-cyan-500 border rounded-md shadow-sm' src="https://images.unsplash.com/photo-1764866558045-ee48abd52732?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

         </div>

    </section>
   
    </section>);
}

export default Background