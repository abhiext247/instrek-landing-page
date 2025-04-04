import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">INSTREK</span>
              <span className="ml-2 text-lg text-blue-400 font-medium">Technologies</span>
            </div>
            <p className="text-gray-400 mb-6">
              Shaping the future with AI, IoT, AIoT, Blockchain and next-gen digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition duration-300">About Us</a></li>
              <li><a href="#technologies" className="text-gray-400 hover:text-blue-400 transition duration-300">Technologies</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition duration-300">Services</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-blue-400 transition duration-300">Careers</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-blue-400 transition duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Digital Transformation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">AI & ML Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">IoT & Smart Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Blockchain Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">123 Tech Park, Innovation Street, Bangalore, India 560001</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@instrek.com" className="text-gray-400 hover:text-blue-400 transition duration-300">info@instrek.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-blue-400 transition duration-300">+91 987 654 3210</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Instrek Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;