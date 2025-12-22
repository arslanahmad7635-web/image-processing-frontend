import React from "react";
import RotatingText from '../../../Components/ReactBitsComponents/RotatingText'


function AboutScreenHero() {
  return (
    <section className='w-full relative flex items-start justify-center'>

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


          <p className="font-alum text-3xl font-bold tracking-wide w-full text-center capitalize leading-8 mt-8">
            We build intuitive image processing solution to enhance, analyze,
            and understand visual data efficiently.
          </p>

        </div>

      </div>

      {/* <div className="mt-7 w-full h-10 flex items-center justify-center">
        <p className="font-Poppins font-medium text-black text-md">
          We are dedicated group of students of Data science from Uet
          Lahore,passionate about creating innovative tools for image anlaysis.
        </p>
      </div> */}

      
    </section>
  );
}

export default AboutScreenHero;