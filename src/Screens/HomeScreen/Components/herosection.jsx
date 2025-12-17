import React from 'react'
import GridDistortion from '../../../Components/ReactBitsComponents/GridDistortion'
import BlurText from '../../../Components/ReactBitsComponents/BlurText'
import GradientText from '../../../Components/ReactBitsComponents/GradientText'
import { Link } from 'react-router-dom'


function HeroSection() {

  return (

    <section className='w-full h-screen flex items-center justify-center relative'>

        <div className='w-full h-full absolute bg-linear-to-t from-white to-transparent z-2 pointer-events-none flex flex-col items-center justify-center'>

            <BlurText
                text={`Powerful Image Processing Made Effortlessly Intuitive`}
                delay={250}
                animateBy="words"
                direction="top"
                className="text-6xl mb-8 w-1/2 text-center flex items-center justify-center font-alum font-black uppercase leading-17 max-md:text-5xl max-sm:w-full max-sm:px-8"
            />


            <div className='mt-4'>
                <Link to={'/get-started'} className='border-none px-8 py-4 text-white rounded-full text-md bg-linear-to-r from-primary to-light hover:from-light hover:to-primary pointer-events-auto transition duration-300 font-poppins'>Get Started</Link>
            </div>

        </div>

        {/* <GridDistortion
            imageSrc="https://images.unsplash.com/photo-1742783201678-33840ee6ee0b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="custom-class object-contain w-full object-center"
        /> */}

    </section>

  )

}


export default HeroSection