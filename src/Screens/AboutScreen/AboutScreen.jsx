import React from 'react';
import Navbar from '../../Components/Navbar';
import AboutScreenHero from './Components/aboutscreenhero';


function AboutScreen() {

  return (

    <section className='w-full flex flex-col'>
        <Navbar />
        <AboutScreenHero />
    </section>

  )

}

export default AboutScreen