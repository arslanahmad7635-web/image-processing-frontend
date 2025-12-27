import React, { useEffect, useState } from 'react'



function GeometryScreen(props) {

    const [operations, setOperations] = useState([]);

    const addOperation = (op) => {

        const newOps = [...operations, op];
        setOperations(newOps);

        props.modify_geometry(props.imageId, newOps);

    }

  return (

    <div className='px-4 pt-22 h-full overflow-hidden font-poppins max-md:w-full max-md:pt-6 max-md:rounded-t-3xl max-md:backdrop-blur-2xl'>

        <div className='flex flex-col items-center justify-center relative overflow-hidden max-md:w-full'>

            <h2 className='text-center font-semibold text-xl uppercase mb-3'>Geometry</h2>

        </div>

        <hr className='border border-gray-200' />

        <div className='w-80 flex flex-col items-center justify-start mt-6'>

            <div className='w-full flex items-center justify-between'>

                <button onClick={() => {addOperation('-r')}} className='w-1/2 h-35 rounded-md flex items-center justify-center shadow-md transition-all group hover:shadow-none border-2 border-white hover:border-gray-300 cursor-pointer'>

                    <svg className='transition-all group-hover:scale-95' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/rotate-clockwise-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                        <path d="M4 2V5.13219C4 5.42605 4.36724 5.55908 4.55527 5.33333C6.3854 3.2875 9.04499 2 12.0051 2C17.5251 2 22 6.47715 22 12C22 15.9582 19.7015 19.3793 16.367 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M11.7347 22.0001C12.2016 22.0001 12.6611 21.9688 13.1111 21.9084M2.26537 8.66675C2.15297 9.06394 2.06477 9.46536 2 9.86901M2.03457 13.5381C2.10487 13.9381 2.19644 14.3343 2.30852 14.7245M3.83292 17.9963C4.07124 18.3497 4.3296 18.69 4.6071 19.0147M7.42857 21.3607C7.78228 21.5632 8.15042 21.7464 8.53228 21.9084" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                </button>
                
                <button onClick={() => addOperation('r')} className='w-1/2 h-35 rounded-md flex items-center justify-center shadow-md transition-all group hover:shadow-none border-2 border-white hover:border-gray-300 cursor-pointer ml-4'>

                    <svg className='transition-all group-hover:scale-95' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/rotate-02-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                        <path d="M20 2V5.13219C20 5.42605 19.6328 5.55908 19.4447 5.33333C17.6146 3.2875 14.955 2 11.9949 2C6.47485 2 2 6.47715 2 12C2 15.9582 4.29852 19.3793 7.63298 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.2653 22.0001C11.7984 22.0001 11.3389 21.9688 10.8889 21.9084M21.7346 8.66675C21.847 9.06394 21.9352 9.46536 22 9.86901M21.9654 13.5381C21.8951 13.9381 21.8036 14.3343 21.6915 14.7245M20.1671 17.9963C19.9288 18.3497 19.6704 18.69 19.3929 19.0147M16.5714 21.3607C16.2177 21.5632 15.8496 21.7464 15.4677 21.9084" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>

                </button>

            </div>
            
            
            <div className='w-full flex items-center justify-between mt-6'>

                <button onClick={() => addOperation('hf')} className='w-1/2 h-35 rounded-md flex items-center justify-center shadow-md transition-all group hover:shadow-none border-2 border-white hover:border-gray-300 cursor-pointer'>

                    <svg className='transition-all group-hover:scale-95' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/flip-horizontal-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                        <path d="M6.29516 14.4204C7.65364 13.4668 8.33288 12.99 8.46522 12.3436C8.51159 12.1172 8.51159 11.8828 8.46522 11.6563C8.33288 11.01 7.65364 10.5332 6.29516 9.57959C4.65002 8.42475 3.82745 7.84734 3.15323 8.03482C2.91938 8.09984 2.70324 8.22164 2.52214 8.39045C2 8.87715 2 9.9181 2 12C2 14.0819 2 15.1229 2.52214 15.6096C2.70324 15.7784 2.91938 15.9002 3.15323 15.9652C3.82745 16.1527 4.65003 15.5752 6.29516 14.4204Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17.7048 9.57959C16.3464 10.5332 15.6671 11.01 15.5348 11.6564C15.4884 11.8828 15.4884 12.1172 15.5348 12.3436C15.6671 12.99 16.3464 13.4668 17.7048 14.4204C19.35 15.5752 20.1725 16.1527 20.8468 15.9652C21.0806 15.9002 21.2968 15.7784 21.4779 15.6096C22 15.1229 22 14.0819 22 12C22 9.9181 22 8.87715 21.4779 8.39045C21.2968 8.22164 21.0806 8.09984 20.8468 8.03482C20.1725 7.84734 19.35 8.42476 17.7048 9.57959Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 14V10M12 6.5V3M12 21V17.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>

                </button>
                
                <button onClick={() => addOperation('vf')} className='w-1/2 h-35 rounded-md flex items-center justify-center shadow-md transition-all group hover:shadow-none border-2 border-white hover:border-gray-300 cursor-pointer ml-4'>

                    <svg className='transition-all group-hover:scale-95' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/flip-vertical-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                        <path d="M9.57959 6.29516C10.5332 7.65364 11.01 8.33288 11.6564 8.46522C11.8828 8.51159 12.1172 8.51159 12.3436 8.46522C12.99 8.33288 13.4668 7.65364 14.4204 6.29516C15.5752 4.65002 16.1527 3.82745 15.9652 3.15323C15.9002 2.91938 15.7784 2.70324 15.6096 2.52214C15.1229 2 14.0819 2 12 2C9.9181 2 8.87715 2 8.39045 2.52214C8.22164 2.70324 8.09984 2.91938 8.03482 3.15323C7.84734 3.82745 8.42476 4.65003 9.57959 6.29516Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14.4204 17.7048C13.4668 16.3464 12.99 15.6671 12.3436 15.5348C12.1172 15.4884 11.8828 15.4884 11.6564 15.5348C11.01 15.6671 10.5332 16.3464 9.57959 17.7048C8.42475 19.35 7.84734 20.1725 8.03482 20.8468C8.09984 21.0806 8.22164 21.2968 8.39045 21.4779C8.87715 22 9.9181 22 12 22C14.0819 22 15.1229 22 15.6095 21.4779C15.7784 21.2968 15.9002 21.0806 15.9652 20.8468C16.1527 20.1725 15.5752 19.35 14.4204 17.7048Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 12H14M17.5 12H21M3 12H6.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>

                </button>

            </div>

        </div>

    </div>

  )

}

export default GeometryScreen