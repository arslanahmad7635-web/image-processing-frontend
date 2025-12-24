import React from "react";
import RotatingText from '../../../Components/ReactBitsComponents/RotatingText'
import TrueFocus from '../../../Components/ReactBitsComponents/TrueFocus'


function AboutScreenHero() {
  return (
    <>
      <section className='w-full h-screen relative flex items-start justify-center'>

        <div className="w-8/10 relative flex justify-center items-center relative h-screen">

          <div className="w-5/10 flex flex-col font-alum flex flex-col items-center justify-center z-2">

            <div className="flex items-center justify-center w-full uppercase tracking-widest">
              <RotatingText
              texts={['Transforming Pixels', 'Analyzing Information', 'Enhancing Ideas', 'Filtering Outcomes']}
              mainClassName="px-6 py-4 text-5xl font-black bg-linear-to-r from-light to-primary text-white overflow-hidden justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              rotationInterval={3000}
            />
            </div>
            
            
            {/* <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={1}
              showBorder={false}
              className="text-4xl font-extrabold rounded-none"
            >
              Transforming Pixels Into Insights
            </GradientText> */}


            <p className="font-alum text-3xl font-bold tracking-wide w-full text-center capitalize leading-8 mt-12">
              We build intuitive image processing solution to enhance, analyze,
              and understand visual data efficiently.
            </p>

            <div className="absolute bottom-20 border-2 border-black rounded-full p-3 animate-pulse">
              <div className="animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="https://cdn.hugeicons.com/icons/arrow-down-02-duotone-standard.svg?v=1.0.1" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                  <path d="M18 13L12 19L6 13M12 18.5V5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>

          </div>


        </div>

      </section>

        
        
        <section className="mt-20 w-full h-50 flex flex-col items-center justify-center">
              <div className="w-1/2 h-full flex items-center justify-center font-poppins text-light">

                <TrueFocus 
                  sentence="Who We Are?"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#609fc7"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />

              </div>

            <div className="w-1/2 flex items-center justify-center">
                  <p className="mt-15 font-poppins text-lg text-black ">
                    We are a dedicated group of Data Science students from UET Lahore, passionate about creating innovative tools for image analysis, In Future we dedicated  strongly to focus on applying machine learning and AI to solve real-world problems.
                    We thrive on collaboration, continuous learning, and turning complex data into meaningful insights.
                 </p>
            </div>
        
        
        </section >

        <section className="mt-30 p-4 w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between">
              <div className="w-[49%] flex flex-col items-center justify-center shadow-md py-6 px-6 rounded-md">
                  <div className="mt-4 flex items-center justify-center font-poppins text-3xl font-bold text-light ">
                      <p>Image Enhancement</p>
                  </div>
                  <div className=" w-9/10 flex items-center justify-center mt-6">
                    <p className=" font-poppins text-md text-black text-center leading-7">The system provides essential image enhancement tools including grayscale conversion, brightness and contrast adjustment, and image sharpening. These operations improve visual clarity, enhance important details, and prepare images for accurate analysis.</p>
                  </div> 
              </div>
              <div className="w-[49%] flex flex-col items-center justify-center shadow-md py-6 px-6 rounded-md">
                  <div className="mt-4 flex items-center justify-center font-poppins text-3xl font-bold text-light ">
                      <p>Image Transformation</p>
                  </div>
                  <div className=" w-9/10 flex items-center justify-center mt-6">
                    <p className=" font-poppins text-md text-black text-center leading-7">Users can perform fundamental image transformations such as rotation, vertical and horizontal mirroring, and image resizing using bilinear interpolation. These features allow smooth and accurate manipulation of image dimensions and orientation.</p>
                  </div> 
              </div>
            </div>

            <div className="w-full flex items-center justify-between mt-12">
              <div className="w-[49%] flex flex-col items-center justify-center shadow-md py-6 px-6 rounded-md">
                  <div className="mt-4 flex items-center justify-center font-poppins text-3xl font-bold text-light ">
                      <p>Noise Reduction</p>
                  </div>
                  <div className=" w-9/10 flex items-center justify-center mt-6">
                    <p className=" font-poppins text-md text-black text-center leading-7">The platform includes noise reduction capabilities through smoothing and blurring filters. These techniques help eliminate unwanted distortions, improve image quality, and ensure reliable results in subsequent processing stages.</p>
                  </div> 
              </div>
              <div className="w-[49%] flex flex-col items-center justify-center shadow-md py-6 px-6 rounded-md">
                  <div className="mt-4 flex items-center justify-center font-poppins text-3xl font-bold text-light ">
                      <p>Color & Channel Analysis</p>
                  </div>
                  <div className=" w-9/10 flex items-center justify-center mt-6">
                    <p className=" font-poppins text-md text-black text-center leading-7">The system supports color-based analysis by enabling separation of RGB channels and histogram visualization. This allows users to examine the contribution of individual color components and better understand image composition.</p>
                  </div> 
              </div>
            </div>
        </section>
      </>
    
  );
}

export default AboutScreenHero;