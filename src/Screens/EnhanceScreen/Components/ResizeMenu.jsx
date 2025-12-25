import React, { useEffect, useState } from 'react'



function ResizeMenu(props) {

    
    const [selectedScale, setSelectedScale] = useState(0);
    const [isResizingImage, setIsResizingImage] = useState(false);


    useEffect(() => {
        if (!props.imageId || selectedScale === 0) return;

        setIsResizingImage(true);

        Promise.resolve(
            props.resize_image(props.imageId, selectedScale)
        ).finally(() => {
            setIsResizingImage(false);
        });

    }, [selectedScale, props.imageId]);


    
  return (

    <div className='px-4 pt-22 h-full overflow-hidden font-poppins max-md:w-full max-md:pt-6 max-md:rounded-t-3xl max-md:backdrop-blur-2xl'>

        <div className='flex flex-col items-center justify-center relative overflow-hidden max-md:w-full'>

            <h2 className='text-center font-semibold text-xl uppercase mb-3'>Resize</h2>

            <p className='text-sm mb-4'>Upscale Your Image To Make It More Detailed</p>

            {
                isResizingImage && (
                    <p>Resizing......</p>
                )
            }

        </div>

        <hr className='border border-gray-200' />

        <div className='h-full overflow-y-scroll custom-scrollbar-thin mt-5'>

            <button onClick={() => setSelectedScale(1.5)} className={`w-full py-8 rounded-sm relative flex items-center justify-center overflow-hidden group cursor-pointer outline-none`}>
                {
                    selectedScale == 1.5 ? (

                        <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0'>1.5x</span>

                    ) : (

                        <>
                            <span className='absolute flex items-center justify-center w-full h-full bg-light right-0 translate-y-0 transition-all group-hover:-translate-y-full'>1.5x</span>
                            <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0 translate-y-full transition-all group-hover:-translate-y-0'>1.5x</span>
                        </>

                    )
                }
            </button>

            <button onClick={() => setSelectedScale(2)} className={`w-full py-8 rounded-sm relative flex items-center justify-center overflow-hidden group cursor-pointer mt-5 outline-none`}>
                {
                    selectedScale == 2 ? (

                        <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0'>2x</span>

                    ) : (

                        <>
                            <span className='absolute flex items-center justify-center w-full h-full bg-light right-0 translate-y-0 transition-all group-hover:-translate-y-full'>2x</span>
                            <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0 translate-y-full transition-all group-hover:-translate-y-0'>2x</span>
                        </>

                    )
                }
            </button>

            <button onClick={() => setSelectedScale(2.5)} className={`w-full py-8 rounded-sm relative flex items-center justify-center overflow-hidden group cursor-pointer mt-5 outline-none`}>
                {
                    selectedScale == 2.5 ? (

                        <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0'>2.5x</span>

                    ) : (

                        <>
                            <span className='absolute flex items-center justify-center w-full h-full bg-light right-0 translate-y-0 transition-all group-hover:-translate-y-full'>2.5x</span>
                            <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0 translate-y-full transition-all group-hover:-translate-y-0'>2.5x</span>
                        </>

                    )
                }
                
            </button>

            <button onClick={() => setSelectedScale(3)} className={`w-full py-8 rounded-sm relative flex items-center justify-center overflow-hidden group cursor-pointer mt-5 outline-none`}>
                {
                    selectedScale == 3 ? (

                        <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0'>3x</span>

                    ) : (

                        <>
                            <span className='absolute flex items-center justify-center w-full h-full bg-light right-0 translate-y-0 transition-all group-hover:-translate-y-full'>3x</span>
                            <span className='absolute flex items-center justify-center text-white w-full h-full bg-primary right-0 translate-y-full transition-all group-hover:-translate-y-0'>3x</span>
                        </>

                    )
                }
                
            </button>
            
        </div>
    </div>
  )
}

export default ResizeMenu