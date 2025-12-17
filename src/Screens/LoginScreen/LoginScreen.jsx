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

    const data = new FormData(e.target);

    try{

      const response = await axios.post('http://127.0.0.1:8000/authentication/user_register',data);

      localStorage.setItem("verification_token",response.data['verification_token']);

      navigate("/user-otp-verify");

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

    <section className="w-full h-screen flex items-center justify-center overflow-hidden font-poppins bg-[linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,.3)),url('https://images.unsplash.com/photo-1658948653839-107f9cd600cc?q=80&w=1632&auto=htmlFormat&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">

      <div className='w-[550px] h-full flex items-center justify-center'>
          
          <motion.form onSubmit={handle_login} initial={{opacity : 0, scale : 0.8}} animate={{opacity : 1, scale : 1}} transition={{duration : 0.2}} className="w-full py-10 flex flex-col items-center justify-center bg-white scale-90 px-8 rounded-md shadow-xl">

                <Link to={"/"} className="font-poppins font-bold text-4xl text-shadow-xl"><span className="text-black">Pic</span><span className="text-cyan-500">X</span></Link>

                <div className={`w-2 h-2 bg-cyan-500 rounded-full transition-all duration-300 flex items-center justify-center capitalize ${errorMsg != '' ? 'w-full h-11 rounded-sm bg-transparent border border-red-600 text-red-600 my-4' : 'my-6'}`}>
              
                  <AnimatePresence>

                    {
                      errorMsg != '' && (
                        <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.5}} exit={{opacity : 0, transition : { delay : 0 }}}>{errorMsg}</motion.p>
                      )
                    }

                  </AnimatePresence>
                  
                </div>

                <div className="flex flex-col justify-center w-full">
                    <label className="text-cyan-500" htmlFor="username">Email</label>
                   <input id="username" type="email" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-md outline-none border-cyan-500 text-cyan-500 mt-1" />
                </div>
                
                <div className="flex flex-col justify-center w-full mt-6">
                    <label className="text-cyan-500" htmlFor="pass">Password</label>
                    <input style={{fontFamily : 'Verdana'}} id="pass" type="password" className="bg-cyan-300 h-13 bg-transparent border-2 px-4 text-xl outline-none border-cyan-500 text-cyan-500 mt-1" />
                </div>

                <div className="flex flex-col justify-center w-full mt-6">
                    <a className="text-gray-800 underline" href="">Forgot Password?</a>
                </div>
                
                <div className="flex flex-col justify-center w-full mt-7">
                    <button className="w-full h-12 bg-cyan-500 font-semibold text-white" type="submit">Proceed</button>
                </div>
                
                <h3 className="text-sm mt-8">Don't Have An Account? <Link to="/user-register" className="text-cyan-500 underline">Create Now</Link></h3>

            </motion.form>
      </div>
      
      {/* <div className="w-6/10 h-full bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1658948653839-107f9cd600cc?q=80&w=1632&auto=htmlFormat&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="w-full h-full bg-linear-to-r from-white to-transparent from-0% to-65% flex items-center justify-center"></div>
      </div> */}

    </section>

  )

}

export default LoginScreen