import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets.js'



const HeroSection = () => {
  return (
    <div className="text-white py-36 flex flex-row justify-center items-center bg-cover bg-center h-screen" style={{ backgroundImage: `url(${assets.bg_img})` }}>
      <div className="container mx-auto px-4 pt-8" >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl flex flex-col items-center mx-auto gap-2"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-center">
            Shaping the <p className='inline text-orange-400 bg-clip-text text-transparent'>Future</p> with <p className='inline bg-pink-700 bg-clip-text text-transparent invert'>Next-Gen</p> Digital Solutions
          </h1>
          <p className="text-xl mb-8 text-center">
            Empowering businesses, governments, and institutions with cutting-edge automation, 
            smart city innovations, and advanced IT services.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
              Explore Services
            </button>
            <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/15 transition duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
      
    </div>
  );
};

export default HeroSection;