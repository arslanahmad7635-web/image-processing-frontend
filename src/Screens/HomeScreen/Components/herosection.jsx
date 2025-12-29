import React, { useEffect, useState } from 'react'
import GridDistortion from '../../../Components/ReactBitsComponents/GridDistortion'
import BlurText from '../../../Components/ReactBitsComponents/BlurText'
import GradientText from '../../../Components/ReactBitsComponents/GradientText'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'


function HeroSection() {

    const [openStartMenu, setOpenStartMenu] = useState(false);

    useEffect(() => {
        if (openStartMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openStartMenu]);

    

  return (

    <section className='w-full h-screen flex items-center justify-center relative'>

        <AnimatePresence>

            {
                openStartMenu && (

                    <motion.div initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className='w-full h-full flex items-center justify-center backdrop-blur-sm fixed z-20'>

                        <div onClick={() => setOpenStartMenu(false)} className='w-full h-full bg-orange-300 absolute opacity-0'></div>
                    
                        <motion.div initial={{opacity : 0, scale : 0.9}} animate={{opacity : 1, scale : 1}} transition={{delay : 0.2}} className='shadow-md'>
                            <Link to={'/image-enhancement'} className='flex items-center justify-center w-60 h-60 bg-white rounded-lg relative'>

                                <h2 to={'/image-enhancement'} className='text-2xl font-poppins'>Enahance</h2>

                            </Link>
                        </motion.div>
                        
                        <motion.div initial={{opacity : 0, scale : 0.9}} animate={{opacity : 1, scale : 1}} transition={{delay : 0.2}} className='ml-5 shadow-md'>
                            <Link to={'/image-enhancement'} className='flex items-center justify-center w-60 h-60 bg-white rounded-lg relative'>

                                <h2 to={'/image-analysis'} className='text-2xl font-poppins'>Analyze</h2>

                            </Link>
                        </motion.div>
                        

                    </motion.div>

                )
            }

        </AnimatePresence>
        <div className='w-full h-full absolute bg-linear-to-t from-white to-transparent z-2 pointer-events-none flex flex-col items-center justify-center'>

            <BlurText
                text={`Powerful Image Processing Made Effortlessly Intuitive`}
                delay={250}
                animateBy="words"
                direction="top"
                className="text-6xl mb-8 w-1/2 text-center flex items-center justify-center font-alum font-black uppercase leading-17 max-md:text-5xl max-sm:w-full max-sm:px-8"
            />


            <div className='mt-4'>
                <button onClick={() => setOpenStartMenu(true)} className='border-none px-8 py-4 text-white rounded-full text-md bg-linear-to-r from-primary to-light hover:from-light hover:to-primary pointer-events-auto transition duration-300 font-poppins'>Get Started</button>
            </div>

        </div>

         <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1742783201678-33840ee6ee0b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            grid={15}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className=""
        />

    </section>

  )

}


export default HeroSection