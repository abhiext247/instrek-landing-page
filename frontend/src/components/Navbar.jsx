import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-gray-800 shadow-md py-2' : 'bg-transparent text-white py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">INSTREK</span>
            <span className="ml-2 text-lg text-blue-500 font-medium">Technologies</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 px-2">
            <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
            <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
            <a href="#technologies" className="hover:text-blue-500 transition duration-300">Technologies</a>
            <a href="#services" className="hover:text-blue-500 transition duration-300">Services</a>
            <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className={`px-5 py-2 rounded-md font-medium ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-800'}  hover:bg-blue-700 hover:text-white transition duration-300`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            <a href="#home" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Home</a>
            <a href="#about" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>About</a>
            <a href="#technologies" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Technologies</a>
            <a href="#services" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Services</a>
            <a href="#contact" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>Contact</a>
            <button className={`mt-3 px-5 py-2 rounded-md font-medium w-full ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-800'} hover:bg-blue-700 hover:text-white transition duration-300`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;