import axios from 'axios';
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginScreen() {

  const navigate = useNavigate();
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handle_login(e) {

    setIsSubmitButtonDisabled(true);

    e.preventDefault();

    
    try{
      
      const data = new FormData(e.target);

      const response = await axios.post('http://127.0.0.1:8000/authentication/user_login', data, {withCredentials : true});

      console.log(response);

      setIsSubmitButtonDisabled(false);

    } catch(error) {

      setErrorMsg(error.response.data.error);

      setIsSubmitButtonDisabled(false);

      setTimeout(() => {

        setErrorMsg('');
        
      }, 2500);

    }
    
  }

  return (

    <section className="w-full h-screen flex items-center justify-center overflow-hidden font-poppins bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),url('https://images.unsplash.com/photo-1761448914253-ace71c92d2ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">

      <div className='w-[550px] h-full flex items-center justify-center'>
          
          <motion.form onSubmit={handle_login} initial={{opacity : 0, scale : 0.8}} animate={{opacity : 1, scale : 1}} transition={{duration : 0.2}} className="w-full flex flex-col items-center justify-center scale-90 bg-[#ffffff10] backdrop-blur rounded-md shadow-xl group px-8 py-6">

                <Link to={"/"} className="font-poppins font-bold text-4xl text-shadow-xl"><span className="text-cyan-500">Pic</span><span className="text-black">X</span></Link>

                <div className={`w-2 h-2 bg-[#000a35] rounded-full transition-all duration-300 flex items-center justify-center capitalize ${errorMsg != '' ? 'w-full h-11 rounded-sm bg-transparent border border-red-600 text-red-600 my-4' : 'my-6'}`}>
              
                  <AnimatePresence>

                    {
                      errorMsg != '' && (
                        <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.5}} exit={{opacity : 0, transition : { delay : 0 }}}>{errorMsg}</motion.p>
                      )
                    }

                  </AnimatePresence>
                  
                </div>

                <div className="flex flex-col justify-center w-full">
                    <label className="text-[#000a35]" htmlFor="email">Email</label>
                    <input name='email' id="email" type="email" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-md outline-none border-[#000a35] text-[#000a35] mt-1" required />
                </div>
                
                <div className="flex flex-col justify-center w-full mt-6">
                    <label className="text-[#000a35]" htmlFor="password">Password</label>
                    <input name='password' style={{fontFamily : 'Verdana'}} id="password" type="password" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-xl outline-none border-[#000a35] text-[#000a35] mt-1" required />
                </div>

                <div className="flex flex-col justify-center w-full mt-6">
                    <a className="text-gray-800 underline" href="">Forgot Password?</a>
                </div>
                
                <div className="flex flex-col justify-center w-full mt-7">
                    <button className="w-full h-12 bg-[#000a35] font-semibold text-white" type="submit">Proceed</button>
                </div>
                
                <h3 className="text-sm mt-8 text-white">Don't Have An Account? <Link to="/user-register" className="text-cyan-500 underline">Create Now</Link></h3>

            </motion.form>
      </div>
      
      {/* <div className="w-6/10 h-full bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1658948653839-107f9cd600cc?q=80&w=1632&auto=htmlFormat&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="w-full h-full bg-linear-to-r from-white to-transparent from-0% to-65% flex items-center justify-center"></div>
      </div> */}

    </section>

  )

}

export default LoginScreen