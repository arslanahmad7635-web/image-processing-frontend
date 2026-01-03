import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import GradientTextt from '../../../Components/ReactBitsComponents/GradientText'
import BlurText  from '../../../Components/ReactBitsComponents/BlurText'
import 'swiper/css';

import { motion } from 'motion/react';


function IntroSection() {

  return (
 <>
    <section className='w-full h-90 font-poppins overflow-hidden'>


        <motion.div initial={{y : 80, scale : 0.8, opacity : 0}} whileInView={{y : 0, opacity : 1, scale : 1}} className='w-full h-full flex items-center justify-center'>

            <Swiper loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} modules={[Autoplay]} className='h-full flex items-center justify-center'>

                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90 relative'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col max-sm:w-full z-2 max-sm:p-6'>

                            <div className='w-6/10 flex items-start justify-start flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:rounded-x-sm max-sm:shadow-xl max-sm:p-3 max-sm:border-x-3 max-sm:rounded-md border-primary'>
                                <h2 className='text-3xl font-bold max-sm:text-center max-sm:mb-4'>Easy Image Transformation</h2>
                                <p className='mt-2 leading-7 text-md max-sm:text-center'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center max-sm:hidden">

                            <img className='w-3/4 h-3/4 object-contain object-center max-sm:hidden hover:cursor-pointer' src="https://tse3.mm.bing.net/th/id/OIP.K8FAvCy9pDyFXpuhfZDs4wHaEK?pid=Api&P=0&h=220.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90 relative'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col max-sm:w-full z-2 max-sm:p-6'>

                            <div className='w-6/10 flex items-start justify-start flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:rounded-x-sm max-sm:shadow-xl max-sm:p-3 max-sm:border-x-3 max-sm:rounded-md border-primary'>
                                <h2 className='text-3xl font-bold max-sm:text-center max-sm:mb-4'>Intensity Adjustments</h2>
                                <p className='mt-2 leading-7 text-md max-sm:text-center'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center max-sm:hidden">

                            <img className=' w-3/4 h-3/4 object-contain object-center max-sm:hidden hover:cursor-pointer ' src="https://www.lightxeditor.com/blog/wp-content/uploads/2020/03/gamma-feature-image-min-1.jpg" alt="" />
    

                        </div>

                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90 relative'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col max-sm:w-full z-2 max-sm:p-6'>

                            <div className='w-6/10 flex items-start justify-start flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:rounded-x-sm max-sm:shadow-xl max-sm:p-3 max-sm:border-x-3 max-sm:rounded-md border-primary'>
                                <h2 className='text-3xl font-bold max-sm:text-center max-sm:mb-4'>Filters</h2>
                                <p className='mt-2 leading-7 text-md max-sm:text-center'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center max-sm:hidden">

                            <img className='w-3/4 h-3/4 object-contain object-center max-sm:hidden hover:cursor-pointer' src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-02/23aa77d0-67eb-49fe-a515-b31bced529bf.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90 relative'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col max-sm:w-full z-2 max-sm:p-6'>

                            <div className='w-6/10 flex items-start justify-start flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:rounded-x-sm max-sm:shadow-xl max-sm:p-3 max-sm:border-x-3 max-sm:rounded-md border-primary'>
                                <h2 className='text-3xl font-bold max-sm:text-center max-sm:mb-4'>Analytical Insights</h2>
                                <p className='mt-2 leading-7 text-md max-sm:text-center'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center max-sm:hidden">

                            <img className='w-3/4 h-3/4 object-contain object-center max-sm:hidden hover:cursor-pointer' src="https://tse4.mm.bing.net/th/id/OIP.kJ6dsMUHelRYFCkWNzJLIAHaEJ?pid=Api&P=0&h=220.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>

        </motion.div>

    </section>
    <section className='w-full mt-9 sm:h-auto flex flex-col items-center justify-center px-2 sm:px-0'>
        <div className=' flex flex-col items-center justify-center '>
             
            <h2 className='text-xl sm:text-2xl font-bold font-poppins text-center '>Transform Your Images, Instantly</h2>
            <p className=' w-full sm:w-1/2 mt-2 px-4 sm:px-8 leading-relaxed text-sm text-center sm:text-left font-poppins  '>Unlock the full potential of your visuals with our cutting-edge image processing platform. Whether you need high-quality enhancements, smart filters, background removal, or advanced editing tools, our AI-powered solutions make every image stunning and ready for any purpose. Seamlessly optimize, retouch, and transform your photos in just a few clicks, all from an intuitive, user-friendly interface designed to save time and elevate your creativity</p>
         </div>
         <div className='mt-6 flex flex-col items-center justify-center '>
             
            <h2 className='text-xl sm:text-2xl font-bold font-poppins text-center'>The Final Vision</h2>
            <p className='w-full sm:w-1/2 mt-2 px-4 sm:px-8 leading-relaxed text-sm text-center sm:text-left font-poppins  '>Your images deserve more than just a filter—they deserve a transformation. Experience the perfect blend of power and simplicity. Clean, fast, and remarkably effective: its time to give your visuals the edge they need to stand out in a crowded digital world. Unlock a new standard of clarity that brings every hidden detail to life with stunning professional accuracy. Dont just share your story—amplify it with high-impact imagery that commands attention the moment it's seen.</p>
         </div>
         

    </section>
    <section className=' w-full mt-10 bg-gradient-to-t from-light to-white flex flex-col sm:flex-row justify-center items-center py-4 sm:h-20 gap-2 sm:gap-0 ' >
        <div className=' w-full sm:w-1/4 flex items-center justify-center text-center'>
                 
                     <p className='text-xs sm:text-sm font-poppins text-black'>
                          © {new Date().getFullYear()} PicX. All rights reserved.
                     </p>
         </div>      
         <div className='  w-full sm:w-1/4 flex items-center justify-center gap-4 sm:gap-6 text-sm font-poppins text-black'>
                     <p>Privacy Policy</p>
                     <p>Terms of Service</p>
        </div>
       
        
        




    </section>

  </>  

  )

}

export default IntroSection