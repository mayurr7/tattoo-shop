import React from 'react';
// import hero data
import { heroData } from '../data'
// // import motion
import { motion } from "framer-motion";
//import fadein
import { fadeIn } from "../variants";

let container = {
  hidden : {},
  show: {
    transition:{
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};


let Hero = () => {
  let { title, subtitle, btnText, btnIcon } = heroData;
  return (
  <section  className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
    <motion.div
     variants={container}
     initial='hidden'
     whileInView={'show'}
      className='container mx-auto  min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
    {/* text and btn */}
      <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
        {/* title */}
        <motion.h1 variants={fadeIn('down')} className='h1'>{title}</motion.h1>

        {/* subtitle */}
        <p className='mb-8 lg:mb-16 max-w-lg leading-relaxed'>{subtitle}</p>

        {/* btn */}
        <div>
          <button className='btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0'>{btnText} <div className='text-xl'>{btnIcon}</div></button>
        </div>
      </div>
      {/* outline text */}
      <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'>

      </div>
    </motion.div>

  </section>
  );
};

export default Hero;

