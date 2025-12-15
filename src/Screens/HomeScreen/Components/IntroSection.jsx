import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { motion } from 'motion/react';


function IntroSection() {

  return (

    <section className='w-full h-90 font-poppins overflow-hidden'>


        <motion.div initial={{y : 80, scale : 0.8, opacity : 0}} whileInView={{y : 0, opacity : 1, scale : 1}} className='w-full h-full flex items-center justify-center'>

            <Swiper loop={true} autoplay={{delay: 2500, disableOnInteraction: false,}} spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} modules={[Autoplay]} className='h-full flex items-center justify-center'>

                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col'>

                            <div className='w-6/10 flex items-start justify-start flex-col'>
                                <h2 className='text-3xl font-bold'>Easy Image Transformation</h2>
                                <p className='mt-2 leading-7 text-md'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className='w-1/2 h-full flex items-center justify-center'>

                            <img className='w-3/4 h-3/4 object-contain object-center' src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-02/23aa77d0-67eb-49fe-a515-b31bced529bf.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col'>

                            <div className='w-6/10 flex items-start justify-start flex-col'>
                                <h2 className='text-3xl font-bold'>Intensity Adjustments</h2>
                                <p className='mt-2 leading-7 text-md'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className='w-1/2 h-full flex items-center justify-center'>

                            <img className='w-3/4 h-3/4 object-contain object-center' src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-02/23aa77d0-67eb-49fe-a515-b31bced529bf.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col'>

                            <div className='w-6/10 flex items-start justify-start flex-col'>
                                <h2 className='text-3xl font-bold'>Filters</h2>
                                <p className='mt-2 leading-7 text-md'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className='w-1/2 h-full flex items-center justify-center'>

                            <img className='w-3/4 h-3/4 object-contain object-center' src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-02/23aa77d0-67eb-49fe-a515-b31bced529bf.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full flex items-center justify-center h-90'>

                        <div className='w-1/2 h-full flex items-center justify-center flex-col'>

                            <div className='w-6/10 flex items-start justify-start flex-col'>
                                <h2 className='text-3xl font-bold'>Analytical Insights</h2>
                                <p className='mt-2 leading-7 text-md'>Easy To Use Image Transformation Tools Like Cropping, Rotation, Mirroring, Resizing, To Make Geometrical Editing More Flexible.</p>
                            </div>

                        </div>
                        <div className='w-1/2 h-full flex items-center justify-center'>

                            <img className='w-3/4 h-3/4 object-contain object-center' src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-02/23aa77d0-67eb-49fe-a515-b31bced529bf.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>

        </motion.div>

    </section>

  )

}

export default IntroSection