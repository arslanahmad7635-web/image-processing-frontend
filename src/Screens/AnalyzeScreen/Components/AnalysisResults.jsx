import { motion } from 'motion/react';
import React from 'react'


function AnalysisResults(props) {

    console.log(props.response.contributions);
    console.log(props.response.images);

  return (

    <section className='w-full h-screen flex flex-col items-center justify-center'>

        {
            props.option == 'Channel Analysis' && (
                <div className='w-full flex flex-wrap items-center justify-center'>

                    <motion.div initial={{opacity : 0, y : 20}} animate={{opacity : 1, y : 0}} className='w-80 h-80 flex items-center justify-center rounded-lg overflow-hidden relative'>

                        <img className='w-full h-full object-contain object-center' src={`${props.response.images.red_image}`} alt="" />
                        <h4 className='absolute font-poppins text-white text-2xl'>{props.response.contributions.red_contribution}%</h4>

                    </motion.div>

                    <motion.div initial={{opacity : 0, y : 20}} animate={{opacity : 1, y : 0}} transition={{delay : 0.2}} className='w-80 h-80 flex items-center justify-center rounded-lg overflow-hidden mx-6 relative'>

                        <img className='w-full h-full object-contain object-center' src={`${props.response.images.green_image}`} alt="" />
                        <h4 className='absolute font-poppins text-white text-2xl'>{props.response.contributions.green_contribution}%</h4>

                    </motion.div>

                    <motion.div initial={{opacity : 0, y : 20}} animate={{opacity : 1, y : 0}} transition={{delay : 0.4}} className='w-80 h-80 flex items-center justify-center rounded-lg overflow-hidden relative'>

                        <img className='w-full h-full object-contain object-center' src={`${props.response.images.blue_image}`} alt="" />
                        <h4 className='absolute font-poppins text-white text-2xl'>{props.response.contributions.red_contribution}%</h4>

                    </motion.div>

                </div>
            )
        }
        
        
        {
            props.option == 'Edge Detection' && (
                <div className='w-full flex items-center justify-center'>

                    <motion.div initial={{opacity : 0, y : 20}} animate={{opacity : 1, y : 0}} className='w-80 h-80 flex items-center justify-center rounded-lg overflow-hidden relative'>

                        <img className='w-full h-full object-contain object-center' src={`${props.response.image}`} alt="" />

                    </motion.div>

                </div>
            )
        }
            
    </section>

  )

}

export default AnalysisResults