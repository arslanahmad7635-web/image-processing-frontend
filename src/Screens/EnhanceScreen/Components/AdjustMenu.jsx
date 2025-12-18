import React, { useEffect, useState, useRef } from 'react'


function AdjustMenu(props) {

    const [brightnessValue, setBrightnessValue] = useState(0);
    const [contrastValue, setContrastValue] = useState(1);
    const [saturationValue, setSaturationValue] = useState(1);
    const [gammaValue, setGammaValue] = useState(1);
    const debounceRef = useRef(null);

    useEffect(() => {
    
        if (!props.imageId) return;

        clearTimeout(debounceRef.current);


        debounceRef.current = setTimeout(() => {
            props.apply_adjustment(props.imageId,brightnessValue,contrastValue,saturationValue,gammaValue);
        }, 500);


        return () => clearTimeout(debounceRef.current);
        }, [
        brightnessValue,
        contrastValue,
        saturationValue,
        gammaValue
    ]);

  return (

    <div className='px-4 pt-22 h-full overflow-hidden font-poppins max-md:w-full max-md:pt-6 max-md:rounded-t-3xl max-md:backdrop-blur-2xl'>

        <div className='flex items-center justify-center relative overflow-hidden max-md:w-full'>

            <h2 className='text-center font-semibold text-xl uppercase mb-4'>Adjust</h2>

        </div>

        <hr className='border border-gray-200' />

        <div className='h-full overflow-y-scroll custom-scrollbar-thin px-8'>
            <div className='flex flex-col items-start justify-start border-b border-gray-200 pb-6 mt-8'>

                <h3>Brightness</h3>

                <input onChange={(e) => setBrightnessValue(Number(e.target.value))} id="default-range" type="range" min={-50} max={50} step={2} defaultValue={brightnessValue} class="range-slider w-full rounded-full bg-transparent border-2 border-black p-1 mt-6"></input>

                <div className='w-full flex items-center justify-center mt-3'>

                    <span>{brightnessValue}</span>

                </div>


            </div>
            
            
            <div className='w-full flex flex-col items-start justify-start border-b border-gray-200 pb-6 mt-8'>

                <h3>Contrast</h3>

                <input onChange={(e) => setContrastValue(Number(e.target.value))} id="default-range" type="range" min={0.1} max={1.9} step={0.1} defaultValue={1} class="range-slider rounded-full bg-transparent border-2 border-black p-1 mt-6"></input>

                <div className='w-full flex items-center justify-center mt-3'>

                    <span>{contrastValue}</span>

                </div>


            </div>
            
            
            <div className='w-full flex flex-col items-start justify-start border-b border-gray-200 pb-6 mt-8'>

                <h3>Saturation</h3>

                <input onChange={(e) => setSaturationValue(Number(e.target.value))} id="default-range" type="range" min={0.1} max={1.9} step={0.1} defaultValue={1} class="range-slider rounded-full bg-transparent border-2 border-black p-1 mt-6"></input>

                <div className='w-full flex items-center justify-center mt-3'>

                    <span>{saturationValue}</span>

                </div>


            </div>
            
            
            <div className='w-full flex flex-col items-start justify-start border-b border-gray-200 pb-6 mt-8 mb-8'>

                <h3>Gamma</h3>

                <input onChange={(e) => setGammaValue(Number(e.target.value))} id="default-range" type="range" min={0.1} max={1.9} step={0.1} defaultValue={1} class="range-slider rounded-full bg-transparent border-2 border-black p-1 mt-6"></input>

                <div className='w-full flex items-center justify-center mt-3'>

                    <span>{gammaValue}</span>

                </div>


            </div>
        </div>
    </div>
  )
}

export default AdjustMenu