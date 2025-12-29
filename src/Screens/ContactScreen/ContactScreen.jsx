import React from 'react'
import Navbar from '../../Components/Navbar'



function ContactScreen() {
  return (
    <section className='w-full flex flex-col items-center justify-start'>
    
        <Navbar/>
        
        <div className="overflow-hidden flex flex-col mt-22 font-poppins">
          
          <div className="text-white p-8 flex flex-col justify-center flex flex-col items-center justify-center">

            <h2 className="text-3xl text-black font-bold mb-3 max-sm:text-2xl">Contact Us</h2>

            <div className='flex flex-col items-center justify-center w-full'>
              <p className="text-black max-sm:text-sm">Feel free to contact us anytime and share your queries.</p>
            </div>

          </div>
          
          <form className="flex flex-col items-center justify-start mt-4">

            <div className='w-full flex flex-col items-start justify-start'>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input type="text" placeholder="Rizwan" className="w-full rounded-sm border border-gray-300 px-4 py-2"/>
            </div>

            <div className='w-full flex flex-col items-start justify-start mt-8'>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input type="email" placeholder="Rizwan@gmail.com" className="w-full rounded-sm border border-gray-300 px-4 py-2 "/>
            </div>

            <div className='w-full flex flex-col items-start justify-start mt-8'>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea rows="5" placeholder="Write your message here..." className="w-full rounded-sm border border-gray-300 px-4 py-2 resize-none"/>
            </div>

            <button type="submit" className="w-full bg-light hover:bg-primary text-white font-medium py-4 transition mt-10 rounded-sm">Send Message</button>
            
          </form>

        </div>
    
    
    </section>
  )
}

export default ContactScreen