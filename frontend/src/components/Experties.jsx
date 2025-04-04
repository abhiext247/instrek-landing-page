import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaRobot, FaDatabase, FaLock, FaCloud } from 'react-icons/fa';

const TechCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-200 to-green-100 border-t-4 border-blue-700 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
    >
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Experties = () => {
  const technologies = [
    {
      icon: <FaBrain />,
      title: "Artificial Intelligence",
      description: "Advanced AI solutions to automate processes and derive insights from complex data."
    },
    {
      icon: <FaNetworkWired />,
      title: "Internet of Things",
      description: "Connected device ecosystems that enable smart operations and real-time monitoring."
    },
    {
      icon: <FaRobot />,
      title: "Conversational & Agentic AI",
      description: "Intelligent virtual assistants and autonomous agents that transform customer interactions."
    },
    {
      icon: <FaLock />,
      title: "Blockchain",
      description: "Secure, transparent distributed ledger technology for various applications."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description: "Scalable, flexible cloud solutions to power your digital transformation."
    },
    {
      icon: <FaDatabase />,
      title: "Big Data Analytics",
      description: "Transform vast amounts of data into actionable business intelligence."
    }
  ];

  return (
    <section id="technologies" className=" pt-16 pb-32 bg-gray-900">
      <div className="container mx-auto px-4  py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">Our Expertise in Next-Gen Technologies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to drive innovation and digital excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index} 
              icon={tech.icon} 
              title={tech.title} 
              description={tech.description} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experties;