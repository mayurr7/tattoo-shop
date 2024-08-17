import React from 'react';
// import hero data
import { heroData } from '../data'
// // import motion
import { motion } from "framer-motion";
//import fadein
import { fadeIn } from "../variants";


let Hero = () => {
  let { title, subtitle, btnText, btnIcon } = heroData;
  return (
  <section  className='bg-hero bg-cover bg-center min-h-[40vh]'>
    <div className='container mx-auto'>hero</div>

  </section>
  );
};

export default Hero;

