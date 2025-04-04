import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';



const SiteContact = () => {

  const contacts = [
    {
      icon:<FaEnvelope />,
      title: "Email Us",
      description: "For any questions or support, feel free to send us an email at tithika.mittal@instrek.com. We aim to respond within 24 hours."
    },
    {
      icon:<FaPhoneAlt />,
      title: "Call Us",
      description: "You can reach us directly at +91 9717600731. Our support team is available from 9 AM to 6 PM IST."
    },
    {
      icon:<FaMapMarkerAlt />,
      title: "Visit Us",
      description: "We'd love to meet you! Visit us at 912, Suryakiran Building, Connaught Place, Delhi, India. Schedule an appointment to discuss your projects."
    }
  ]
  return (
    <div className='bg-black text-white py-20 mx-auto'>
      <div className='flex flex-col items-center'>
        <p className="text-md font-bold text-blue-600 mb-2">GET IN TOUNCH</p>
        <h2 className="text-3xl md:text-5xl font-bold my-4">We're Here to Help</h2>
        <p className="text-xl text-gray-500 max-w-5xl mx-auto px-2 text-center">
          Reach out to us for any inquiries or support. Our team is ready to assist you with your technology needs.
        </p>
      </div >

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-14'>
        {contacts.map((con,index) =>(
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:(index*0.1) }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 items-center flex flex-col text-center" key={index}
        >
          <div className="text-blue-600 text-4xl mb-4">{con.icon}</div>
          <h3 className="text-3xl font-bold mb-2 text-blue-700">{con.title}</h3>
          <p className="text-gray-400 text-md">{con.description}</p>
        </motion.div>
        ))}

        

        
      </div>

    </div>
  )
}

export default SiteContact


