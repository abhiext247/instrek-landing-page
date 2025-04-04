import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className=" rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 bg-gradient-to-r from-blue-200 to-green-100"
    >
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-700"></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const IndustryBadge = ({ name }) => (
  <div className="inline-block px-4 py-2 rounded-full bg-white border border-blue-700 text-blue-800 font-medium text-sm mr-2 mb-2">
    {name}
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business operations and create new digital capabilities."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>,
      title: "AI & ML Solutions",
      description: "Custom AI and machine learning solutions that automate processes, derive insights from data, and enhance decision-making."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>,
      title: "Data Analytics",
      description: "Advanced analytics solutions that transform raw data into actionable insights and business intelligence."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>,
      title: "IoT & Smart Systems",
      description: "Connected device ecosystems and smart systems that enable real-time monitoring, automation, and operational intelligence."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>,
      title: "Blockchain Solutions",
      description: "Secure and transparent blockchain implementations for various applications including supply chain, finance, and more."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that transform customer interactions and provide 24/7 support."
    }
  ];

  const industries = [
    "Healthcare", "Finance", "Manufacturing", "Retail", 
    "Government", "Energy", "Education", "Logistics", "Smart Cities"
  ];

  return (
    <section id="services" className="py-16 bg-gray-800 " style={{ backgroundImage: `url(${assets.bg_img_5})` }}>
      <div className="container mx-auto p-4">
        <div className="text-center mb-16 flex flex-col gap-2">
          <div className="text-sm font-bold text-blue-600 mb-2">OUR SERVICES</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Comprehensive Technology Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver end-to-end technology solutions tailored to your specific business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Industries We Serve</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our solutions are tailored to address the unique challenges of various industries
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
            {industries.map((industry, index) => (
              <IndustryBadge key={index} name={industry} />
            ))}
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;