import axios from 'axios'
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { BarLoader, PuffLoader } from 'react-spinners';
// import AdjustMenu from './Components/AdjustMenu';
// import ResizeMenu from './Components/ResizeMenu';
// import GeometryScreen from './Components/GeometryScreen';




function AnalyzeScreen() {

    const [imagePreview, setImagePreview] = useState('');
    const [imageId, setImageId] = useState(null); 
    const [isProcessingImage, setIsProcessingImage] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const [selectedOption, setSelectedOption] = useState('');
    
    
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result); // Set the image preview URL
        };
        reader.readAsDataURL(file); // Convert image file to base64 URL
        }
    };


    async function uploadOriginalImage(base64Image) {

        const res = await axios.post(
            "http://127.0.0.1:8000/api/upload_image",
            { image_base64: base64Image },
            { headers: { "Content-Type": "application/json" } }
        );

        setImageId(res.data.image_id);
    }


    async function makeImageSelected() {

        setImageSelected(true);

        await uploadOriginalImage(imagePreview);
        
    }


    async function applyAdjustments(image_Id, brightnes_val,contrast_val,saturation_val,gamma_value) {
        if (!image_Id) return;

        setIsProcessingImage(true);
        setIsExpanded(false);

        const res = await axios.post(
            "http://127.0.0.1:8000/api/apply_adjustments",
            {
            image_id: image_Id,
            brightness: brightnes_val,
            contrast: contrast_val,
            saturation: saturation_val,
            gamma: gamma_value,
            },
            { headers: { "Content-Type": "application/json" } }
        );

        setImagePreview(res.data.image);

        setIsProcessingImage(false);
    }
    
    
    async function resizeImage(image_Id, resize_scale) {
        if (!image_Id) return;

        setIsProcessingImage(true);
        setIsExpanded(false);

        try{

            const resp = await axios.post('http://127.0.0.1:8000/api/resize_image',
                {
                    image_id : image_Id,
                    resize_scale : resize_scale
                }
            );

            setImagePreview(resp.data.image);

            setIsProcessingImage(false);

            console.log(resp);

        } catch(error){

            console.log(error.response.data.error);

        }

        // setImagePreview(res.data.image);

        setIsProcessingImage(false);
    }
    
    
    
    async function modifyGeometry(image_Id, changes_to_make) {
        if (!image_Id) return;

        setIsProcessingImage(true);
        setIsExpanded(false);

        try{

            const resp = await axios.post('http://127.0.0.1:8000/api/modify_geometry',
                {
                    image_id : image_Id,
                    change_to_be_made : changes_to_make
                }
            );

            setImagePreview(resp.data.image);

            setIsProcessingImage(false);

            console.log(resp);

        } catch(error){

            console.log(error.response.data.error);

        }

        // setImagePreview(res.data.image);

        setIsProcessingImage(false);
    }


    useEffect(() => {
        document.body.style.overflow = selectedOption ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [selectedOption]);

    return (

    <>

    <Navbar />

    <section className={`w-full h-screen flex items-center ${selectedOption == '' ? 'justify-center' : 'justify-center'} overflow-hidden max-md:flex-col`}>

        <div className='w-full h-full flex flex-col items-center justify-center overflow-hidden'>

            <div className={`flex flex-col items-center justify-center p-2 rounded-md ${!imageSelected && 'transition duration-300 hover:shadow-xl'} ${!imageSelected && !imagePreview == '' && 'shadow-xl'}`}>

                <div className={`${imageSelected ? 'w-100 h-100' : 'w-70 h-70 shadow-xl'} flex flex-col items-center justify-center rounded-lg relative group transition duration-300`}>

                    <div className='w-full h-full bg-transparent z-4 absolute'>


                    </div>

                    {
                        !imageSelected && (

                            <input onChange={handleImageChange} type="file" name="image_to_be_processed" className='w-full h-full absolute opacity-0 cursor-pointer z-4' required />

                        )
                    }
    

                    <AnimatePresence>
                        {
                            imagePreview != '' ? (

                                <motion.img initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className='w-full h-full object-center object-contain absolute rounded-md z-3' src={imagePreview} alt="" />

                            ) : ''
                        }
                    </AnimatePresence>


                    <div className='group-hover:scale-90 transition duration-300'>
                        <svg className='group-hover:scale-90 transition duration-300' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/image-add-02-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#292929ff">
                            <path d="M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M15.5 17L14 15.5M21 16L18.5303 13.5303C18.1908 13.1908 17.7302 13 17.25 13C16.7698 13 16.3092 13.1908 15.9697 13.5303L14 15.5" stroke="#292929ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12" stroke="#292929ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21.5 6H18M18 6H14.5M18 6V2.5M18 6V9.5" stroke="#292929ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>

                    <h2 className='mt-4 font-poppins font-semibold'>Upload Image</h2>
                </div>

            </div>
            <AnimatePresence>
                {
                    imagePreview != "" && !imageSelected && (
                        <motion.div initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} className='flex items-center justify-between mt-12 font-poppins text-white'>

                            <button className='h-20 w-20 bg-white shadow-xl rounded-full flex items-center justify-center transition duration-300 hover:-translate-y-1 cursor-pointer' type="reset" onClick={() => {setImagePreview('');}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/cancel-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#c70d00">
                                    <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="#c70d00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>

                            <button onClick={() => makeImageSelected()} className='h-20 w-20 bg-white shadow-xl rounded-full ml-8 flex items-center justify-center transition duration-300 hover:-translate-y-1 cursor-pointer' type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/tick-02-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#c70d00">
                                    <path d="M5 14L8.5 17.5L19 6.5" stroke="#078200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>

                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>

        {
            imageSelected && selectedOption == '' && (


                <div className="w-full h-full absolute backdrop-blur-md to-transparent flex items-center justify-center z-4">

                    <div className='w-3/4 flex items-center justify-center'>

                        <span onClick={() => {setSelectedOption('adjust')}} className='flex flex-col items-center justify-center group cursor-pointer'>
                            <div className='w-25 h-25 bg-white shadow-xl rounded-full flex items-center justify-center group-hover:scale-105 transition duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/filter-horizontal-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                    <path d="M3 7H6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3 17H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M18 17L21 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15 7L21 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M6 7C6 6.06812 6 5.60218 6.15224 5.23463C6.35523 4.74458 6.74458 4.35523 7.23463 4.15224C7.60218 4 8.06812 4 9 4C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23463C12 5.60218 12 6.06812 12 7C12 7.93188 12 8.39782 11.8478 8.76537C11.6448 9.25542 11.2554 9.64477 10.7654 9.84776C10.3978 10 9.93188 10 9 10C8.06812 10 7.60218 10 7.23463 9.84776C6.74458 9.64477 6.35523 9.25542 6.15224 8.76537C6 8.39782 6 7.93188 6 7Z" stroke="#000000" stroke-width="1.5"></path>
                                    <path d="M12 17C12 16.0681 12 15.6022 12.1522 15.2346C12.3552 14.7446 12.7446 14.3552 13.2346 14.1522C13.6022 14 14.0681 14 15 14C15.9319 14 16.3978 14 16.7654 14.1522C17.2554 14.3552 17.6448 14.7446 17.8478 15.2346C18 15.6022 18 16.0681 18 17C18 17.9319 18 18.3978 17.8478 18.7654C17.6448 19.2554 17.2554 19.6448 16.7654 19.8478C16.3978 20 15.9319 20 15 20C14.0681 20 13.6022 20 13.2346 19.8478C12.7446 19.6448 12.3552 19.2554 12.1522 18.7654C12 18.3978 12 17.9319 12 17Z" stroke="#000000" stroke-width="1.5"></path>
                                </svg>
                            </div>
                            <h3 className='font-poppins text-lg mt-3'>ADJUST</h3>
                        </span>
                        
                        <span onClick={() => {setSelectedOption('resize')}} className='flex flex-col items-center justify-center group cursor-pointer mx-12'>
                            <div className='w-25 h-25 bg-white shadow-xl rounded-full flex items-center justify-center group-hover:scale-105 transition duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-expand-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                    <path d="M8.00001 3.09779C8.00001 3.09779 4.03375 2.74194 3.38784 3.38785C2.74192 4.03375 3.09784 8 3.09784 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M8.00001 20.9022C8.00001 20.9022 4.03375 21.2581 3.38784 20.6122C2.74192 19.9662 3.09784 16 3.09784 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.0107 9.99847L20.0625 3.94678" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99696 14.0024L3.63966 20.3807" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.99732 10.0024L3.84571 3.85889" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M13.9795 14.0024L20.5279 20.4983" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <h3 className='font-poppins text-lg mt-3'>RESIZE</h3>
                        </span>
                        
                        <span onClick={() => {setSelectedOption('geometry')}} className='flex flex-col items-center justify-center group cursor-pointer'>
                            <div className='w-25 h-25 bg-white shadow-xl rounded-full flex items-center justify-center group-hover:scale-105 transition duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/flip-vertical-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                    <path d="M9.57959 6.29516C10.5332 7.65364 11.01 8.33288 11.6564 8.46522C11.8828 8.51159 12.1172 8.51159 12.3436 8.46522C12.99 8.33288 13.4668 7.65364 14.4204 6.29516C15.5752 4.65002 16.1527 3.82745 15.9652 3.15323C15.9002 2.91938 15.7784 2.70324 15.6096 2.52214C15.1229 2 14.0819 2 12 2C9.9181 2 8.87715 2 8.39045 2.52214C8.22164 2.70324 8.09984 2.91938 8.03482 3.15323C7.84734 3.82745 8.42476 4.65003 9.57959 6.29516Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M14.4204 17.7048C13.4668 16.3464 12.99 15.6671 12.3436 15.5348C12.1172 15.4884 11.8828 15.4884 11.6564 15.5348C11.01 15.6671 10.5332 16.3464 9.57959 17.7048C8.42475 19.35 7.84734 20.1725 8.03482 20.8468C8.09984 21.0806 8.22164 21.2968 8.39045 21.4779C8.87715 22 9.9181 22 12 22C14.0819 22 15.1229 22 15.6095 21.4779C15.7784 21.2968 15.9002 21.0806 15.9652 20.8468C16.1527 20.1725 15.5752 19.35 14.4204 17.7048Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10 12H14M17.5 12H21M3 12H6.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h3 className='font-poppins text-lg mt-3'>GEOMETRY</h3>
                        </span>

                    </div>

                </div>

            )
        }

        <AnimatePresence>

            {
                selectedOption == 'adjust' && (
                    <motion.div initial={{opacity : 0, x : 10}} animate={{opacity : 1, x : 0}} className={`h-full bg-transparent shadow-xl flex items-center justify-center max-md:absolute max-md:w-full max-md:z-4 max-md:h-[80%] max-md:bottom-0 transition-all duration-300 ${isExpanded ? "max-md:translate-y-[0%] border-none" : "max-md:translate-y-[85%] max-md:border-t-2 max-md:border-black rounded-2xl"}`}>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute left-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute right-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        {/* <AdjustMenu imageId={imageId} apply_adjustment={applyAdjustments} /> */}
                    </motion.div>
                )
            }
            {
                selectedOption == 'resize' && (
                    <motion.div initial={{opacity : 0, x : 10}} animate={{opacity : 1, x : 0}} className={`h-full bg-transparent shadow-xl flex items-center justify-center max-md:absolute max-md:w-full max-md:z-4 max-md:h-[80%] max-md:bottom-0 transition-all duration-300 ${isExpanded ? "max-md:translate-y-[0%] border-none" : "max-md:translate-y-[85%] max-md:border-t-2 max-md:border-black rounded-2xl"}`}>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute left-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute right-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        {/* <ResizeMenu imageId={imageId} resize_image={resizeImage} /> */}
                    </motion.div>
                )
            }
            {
                selectedOption == 'geometry' && (
                    <motion.div initial={{opacity : 0, x : 10}} animate={{opacity : 1, x : 0}} className={`h-full bg-transparent shadow-xl flex items-center justify-center max-md:absolute max-md:w-full max-md:z-4 max-md:h-[80%] max-md:bottom-0 transition-all duration-300 ${isExpanded ? "max-md:translate-y-[0%] border-none" : "max-md:translate-y-[85%] max-md:border-t-2 max-md:border-black rounded-2xl"}`}>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute left-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        <button onClick={() => setIsExpanded(!isExpanded)} type='button' className='hidden max-md:flex items-center justify-center absolute right-8 top-6 z-2'>
                            {
                                isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-up-01-stroke-rounded.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                )

                            }
                        </button>
                        {/* <GeometryScreen imageId={imageId} modify_geometry={modifyGeometry} /> */}
                    </motion.div>
                )
            }

        </AnimatePresence>

    </section>

    </>
  )

}

export default AnalyzeScreen