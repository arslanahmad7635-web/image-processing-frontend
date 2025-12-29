import { motion } from 'motion/react'
import React from 'react'


function PricingCard(props) {

  return (

    <motion.div initial={{opacity : 0, y : 20}} animate={{opacity : 1, y : 0}} className='w-90 h-full border-3 border-primary rounded-md p-4 max-sm:w-full max-sm:mt-3'>

        <h2 className='font-Poppins text-bold text-4xl mt-3'>{props.planName}</h2>

        <p className='mt-3 flex justify-center items-center font-Poppins text-md leading-8 '>{props.planSub}</p>
        <p className='mt-5 font-Poppins text-4xl text-bold flex items-center justify-start'>{props.planPrice}<p className='text-lg'>/ {props.planDuration}</p></p>

        <div className='w-full flex items-center justify-center my-5'>
        <hr className='w-full border border-gray-200' />
        </div>
        
        <ul className='mt-4 font-Poppins text-md list-disc px-4'>
            {
                props.planFeatures.map((feature) => (

                    <li className='mt-1'>{feature}</li>

                ))
            }

        </ul>

        <button className='mt-10 w-full py-4 items-center text-white bg-light rounded-md border-white'> Get Started </button>

    </motion.div>

  )

}

export default PricingCard