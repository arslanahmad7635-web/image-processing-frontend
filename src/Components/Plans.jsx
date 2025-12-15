import React from 'react'


function Plans() {
  return (
<>
<section className='font-Poppins'>

    <div className='py-25 w-full h-20 text-center justify-center item-center'>
        <h1 className='text-4xl text-blue-300 font-bold font-Poppins'> Plans And Pricing </h1>
        </div>
    <div className=' px-5 w-full h-180  flex flex-row justify-evenly  w-full'>
            <div className='mx-6  w-3/4 h-150 border border-blue-500 rounded-lg  '>
                <h2 className='mx-3 pt-8 font-Poppins text-bold text-4xl'>Free</h2>
                <p className='mx-3 pt-4 flex justify-center items-center  font-Poppins text-lg leading-8 '>Design anything and bring your ideas to life . No cost , Just Creativity.</p>
                <p className='mx-3 mt-3 font-Poppins text-4xl text-bold '><sub className='text-bold font-Poppins text-[38px]'> 0 </sub>Rs</p>
                <p className='mx-3 mt-4 font-Poppins items-center'>/Month for one person</p>
                
                <ul className='mx-3 pt-4 py-6 font-Poppins text-lg list-disc'>
                    With free get:
                    <li className='mx-4'>Easy drag and drop editor</li>
                    <li className='mx-4'>Free credits on signup</li>
                    <li className='mx-4'>AI enhancement up to 4K</li>
                    <li className='mx-4'>Premium locked</li>
                    <li className='mx-4'>enhanced images have a small watermark</li>
                    <li className='mx-4'>standard speed</li>
                </ul>
                <hr className='border-blue-500'/>
                <button className='m-5 mx-20 w-1/2 h-12 items-center text-white bg-blue-700 rounded-md  border-white'> Get Started </button>

            </div>
            <div className='mx-6 w-3/4 h-150  border border-blue-500 rounded-lg '>
             <h2 className='mx-3 pt-8 font-Poppins text-bold text-4xl'>Basic</h2>
                <p className='mx-3 pt-4 flex justify-center items-center  font-Poppins text-lg leading-8 '>Unlock basic(starter) content, more powerfull design tools than free,and new AI features. </p>
                <p className='mx-3 mt-3 font-Poppins text-4xl text-bold '><sub className='text-bold font-Poppins text-[38px]'> 575 </sub>Rs</p>
                <p className='mx-3 mt-4 font-Poppins items-center'>/Month for one person</p>
                
                <ul className='mx-3 pt-4 py-6 font-Poppins text-lg list-disc'>
                    With free get:
                    <li className='mx-4'>Easy drag and drop editor</li>
                    <li className='mx-4'>more monthly credits than free</li>
                    <li className='mx-4'>basic enhancement mode</li>
                    <li className='mx-4'>enhanced images have a no watermark</li>
                    <li className='mx-4'>descent speed</li>
                </ul>
                <hr className='border-blue-500'/>
                <button className='m-5 mx-20 w-1/2 h-12 items-center text-white bg-blue-700 rounded-md  border-white'> Get 25% Discount </button>  
            </div>   
            <div className='mx-5 w-3/4 h-150  border border-blue-500 rounded-lg'> 
             <h2 className='mx-3 pt-8 font-Poppins text-bold text-4xl'>Pro</h2>
                <p className='mx-3 pt-4 flex justify-center items-center  font-Poppins text-lg leading-8 '>Unlock Premium content, more powerful design tools and Ai features </p>
                <p className='mx-3 mt-3 font-Poppins text-4xl text-bold '><sub className='text-bold font-Poppins text-[38px]'> 750 </sub>Rs</p>
                <p className='mx-3 mt-4 font-Poppins items-center'>/Month for one person</p>
                
                <ul className='mx-3 pt-4 py-6 font-Poppins text-lg list-disc'>
                    With free get:
                    <li className='mx-4'>Easy drag and drop editor</li>
                    <li className='mx-4'>1000 credits monthly</li>
                    <li className='mx-4'>AI enhancement up to 8K</li>
                    <li className='mx-4'>enhanced images have no small watermark</li>
                    <li className='mx-4'>high speed</li>
                    <li className='mx-4'>Enjoy and acess every feature</li>

                </ul>
                <hr className='border-blue-500'/>
                <button className='m-5 mx-20 w-1/2 h-12 items-center text-white bg-blue-700 rounded-md  border-white'> Get 50% Discount</button>
            </div>
            <div className='mx-5 w-3/4 h-150   border border-blue-500 rounded-lg '>  
             <h2 className='mx-3 pt-8 font-Poppins text-bold text-4xl'>Premium</h2>
                <p className='mx-3 pt-4 flex justify-center items-center  font-Poppins text-lg leading-8 '>Empower you organization with end to end communication </p>
                <p className='mx-3 mt-3 font-Poppins text-4xl text-bold '><sub className='text-bold font-Poppins text-[38px]'> 1050 </sub>Rs</p>
                <p className='mx-3 mt-4 font-Poppins items-center'>/Month for one person</p>
                
                <ul className='mx-3 pt-4 py-6 font-Poppins text-lg list-disc'>
                    With free get:
                    <li className='mx-4'>Almost unlimited credits or high quota</li>
                    <li className='mx-4'>advanced AI features</li>
                    <li className='mx-4'>priority support</li>
                    <li className='mx-4'>extra perks (API access)</li>
                    <li className='mx-4'>no watermark</li>
                    <li className='mx-4'>fastest processing</li>
                </ul>
                <hr className='border-blue-500'/>
                <button className='m-5 mx-20 w-1/2 h-12 items-center text-white bg-blue-700 rounded-md  border-white'> Get Started </button>
            </div>
     </div>        
    </section>
   
  </>
  )
}

export default Plans