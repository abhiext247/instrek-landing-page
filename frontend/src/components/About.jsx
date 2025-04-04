import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const About = ({ info }) => {
  return (
    <section id="about" className="pb-44 pt-24 bg-gradient-to-r from-blue-300 to-green-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-10 md:mb-0 "
          >
            <div className="relative">
              
              <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-1 rounded-lg shadow-xl">
                <div className="bg-cover bg- p-8 rounded-lg" style={{ backgroundImage: `url(${assets.bg_img_5})` }}>
                  <div className='bg-none px-6 py-12 rounded-md'>
                  <h3 className="text-4xl font-bold mb-4 text-green-500">Our Mission</h3>
                  <p className="text-white font-semibold">
                    To make India AI-ready by empowering businesses, governments, and institutions 
                    with cutting-edge technology solutions that drive innovation and digital excellence.
                  </p>
                  <div className="mt-6 flex flex-col space-y-3">
                    <div className="py-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300 text-lg">Strategic Consulting</span>
                  </div>
                    </div>
                    <div className="flex items-center py-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300 text-lg">Workforce Training</span>
                    </div>
                    <div className="py-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300 text-lg">Scalable Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pl-12"
          >
            <div className="text-sm font-bold text-blue-600 mb-2">ABOUT US</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Shaping the Future with Next-Gen Digital Solutions</h2>
            <p className="text-black mb-6">
              Instrek Technologies is at the forefront of technological innovation, 
              shaping the future with AI, IoT, AIoT, Blockchain and next-gen digital solutions. 
              We empower businesses, governments, and institutions with cutting-edge automation, 
              smart city innovations, and advanced IT services.
            </p>
            <p className="text-black mb-6">
              Our expertise spans Conversational AI, Agentic AI, Digital Transformation 
              and technology-driven solutions to solve nationwide problems. With a mission 
              to make India AI-ready, we drive strategic consulting, workforce hiring & training, 
              and scalable tech solutions.
            </p>
            <p className="text-black font-medium">
              Partner with us to navigate the future of intelligent automation and digital excellence!
            </p>
            <div className="mt-8">
              <a href="#services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;