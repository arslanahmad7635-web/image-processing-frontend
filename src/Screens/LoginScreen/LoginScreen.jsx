import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'


function LoginScreen() {

  return (

    <section className='w-full h-screen flex items-center justify-center bg-emerald-400 overflow-hidden'>

      <div className='w-4/10 h-full flex items-center justify-center bg-white'>
          <motion.form initial={{y : -60, opacity : 0}} animate={{y : 0, opacity : 1}} transition={{duration : 0.3}} action="" className="w-9/10 h-full flex flex-col items-center justify-center">

                <Link to={"/"} className="font-poppins font-bold text-5xl text-shadow-xl"><span className="text-black">Pic</span><span className="text-cyan-500">X</span></Link>

                <hr className="bg-cyan-500 w-2 h-2 my-6 rounded-full border-none" />

                <div className="flex flex-col justify-center w-full px-12">
                    <label className="text-cyan-500" htmlFor="username">Email</label>
                   <input id="username" type="email" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-md rounded-sm outline-none border-cyan-500 text-cyan-500 mt-1" />
                </div>
                
                <div className="flex flex-col justify-center w-full px-12 mt-6">
                    <label className="text-cyan-500" htmlFor="pass">Password</label>
                    <input style={{fontFamily : 'Verdana'}} id="pass" type="password" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-xl rounded-sm outline-none border-cyan-500 text-cyan-500 mt-1" />
                </div>

                <div className="flex flex-col justify-center w-full px-12 mt-6">
                    <a className="text-gray-800 underline" href="">Forgot Password?</a>
                </div>
                
                <div className="flex flex-col justify-center w-full px-12 mt-7">
                    <button className="w-full h-12 bg-cyan-500 rounded-sm font-semibold text-white" type="submit">Proceed</button>
                </div>
                
                <h3 className="text-sm mt-8">Don't Have An Account? <Link to="/user-register" className="text-cyan-500 underline">Create Now</Link></h3>

            </motion.form>
      </div>
      
      <div className="w-6/10 h-full bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1658948653839-107f9cd600cc?q=80&w=1632&auto=htmlFormat&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="w-full h-full bg-linear-to-r from-white to-transparent from-0% to-65% flex items-center justify-center"></div>
      </div>

    </section>

  )

}

export default LoginScreen