import React from 'react'


function Background() {
  return (
<section>
    
     <section className="w-full h-screen flex items-center justify-center align-center bg-[url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover relative">

        <div className="w-full h-full bg-linear-to-t from-cyan-500 to-transparent from-0% to-65% flex items-center justify-center">

            <div className="w-full flex items-center justify-center h-full relative">
                <h2 className="font-poppins font-bold text-4xl text-center text-white leading-14" style={{zIndex: 2}}>Empowering Users to Transform &<br />Analyze Image Effectively</h2>
                
            </div>


        </div>

    </section>

    <section className="w-full h-80 bg-cyan-500">

    </section>
 
    </section>);
}

export default Background