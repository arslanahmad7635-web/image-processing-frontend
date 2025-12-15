import React from 'react'

function Feedback() {
  return (
    <section className='flex w-full h-screen bg-blue-200 font-Poppins'>
     
        <div className='mx-10 my-20 w-1/4 h-160 '>   
            <div>
                <h2 className='pt-9 p-4 text-3xl text-cyan-700 font-bold flex justify-center items-center '>Contact Us</h2> 
                <p className='text-xl font-semibold font-Alumni Sans Pinstripe  p-4 text-cyan-700 '> Feel free to share your valuable thoughts </p>
                <div className='px-12 text-xl font-semibold font-Alumni Sans Pinstripe text-cyan-700 leading-18'>  
                    
                    <p > Address </p>
                    <p className='text-lg font-light'>Pakistan</p>
                    <p >Email  </p>
                    <p className='text-lg font-light'>1234@gmail.com</p>
                    <p > Phone </p>
                    <p className='text-lg font-light'>+92-956-000-5684</p>
                     <p > Instagram </p>
                    <p className='text-lg font-light'>PicX2k25</p>
                </div>  
            </div>                
        </div>
        <div className='m-20  my-20 w-3/4 h-160 bg-blue-300 border rounded-lg border-none shadow-sky-200  leading-10 '>
          <h1 className='p-9 text-4xl text-cyan-700 font-bold font-Poppins flex justify-center items-center'> Contact Us</h1>  
            <div className=' flex flex-row justify-center items-center '>
                <p className='p-9 text-2xl font-semibold text-cyan-700 font-Poppins'>Name</p>
                <label ><input className='border border-black px-4'></input></label>
            </div>
            <div className=' flex flex-row justify-center items-center '>
                <p className='p-9 text-2xl font-semibold text-cyan-700 font-Poppins'>Email</p>
                <label ><input className='border border-black px-4'></input></label>
            </div>
            <div className=' flex flex-row justify-center items-center '>
                <p className='p-9 text-2xl font-semibold text-cyan-700 font-Poppins'>Details</p>
                <label ><input className='border border-black px-4'></input></label>
            </div>
            <div className=' flex flex-row justify-center items-center '>
                <button className='border rounded-lg px-4 bg-blue-200 text-black hover:border border-black border-1 hover:bg-white '>Send Messages</button>
            </div>

            
        </div>



    </section>
  )
}

export default Feedback