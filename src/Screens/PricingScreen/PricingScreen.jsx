import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Plans from '../../Components/Plans'
import PricingCard from './Components/PricingCard';


function PricingScreen() {

  const [duration, setDuration] = useState('monthly');

  return (
    <section className='w-full flex flex-col items-start justify-start'>
    <Navbar/>
    
    <section className='font-poppins w-full'>

      <div className='mt-25 w-full text-center justify-center item-center'>
          <h1 className='text-3xl text-blue-300 font-bold font-Poppins'> Plans And Pricing </h1>
      </div>


      <div className='flex items-center justify-center mt-6'>

        <div className='bg-white p-2 rounded-sm shadow-md'>
          <button onClick={() => setDuration('monthly')} className={`w-45 max-sm:w-35 py-3 rounded-sm transition duration-300 cursor-pointer ${duration == 'monthly' ? 'bg-light' : 'bg-white'}`}>Monthly</button>
          <button onClick={() => setDuration('yearly')} className={`w-45 max-sm:w-35 py-3 rounded-sm ml-2 transition duration-300 cursor-pointer ${duration == 'yearly' ? 'bg-light' : 'bg-white'}`}>Yearly</button>
        </div>

      </div>

      <div className='px-3 py-4 w-full mt-6 h-full flex items-center justify-between flex-wrap'>

              {
                duration == 'monthly' ? (

                  <>
                    <PricingCard planName={"Free"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$0'} planDuration={'Month'} planUsers={1} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Startup"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$250'} planDuration={'Month'} planUsers={1} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Professional"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$600'} planDuration={'Month'} planUsers={1} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Enterprise"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$1500'} planDuration={'Month'} planUsers={1} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                  </>

                  
                ) : (
                  
                  <>
                    <PricingCard planName={"Beginner"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$120'} planDuration={'Year'} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Startup"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$2800'} planDuration={'Year'} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Professional"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$6800'} planDuration={'Year'} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                    <PricingCard planName={"Enterprise"} planSub={"Enhance and analyze images without limits or fees"} planPrice={'$15000'} planDuration={'Year'} planFeatures={['Free Credits on Signup','Image Enhancement up to 1.5X','Premium Locked','Images have a Small Watermark']} />
                  </>

                )
              }


      </div>
    </section>
    
    
  
     </section>
  )
}

export default PricingScreen