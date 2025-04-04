import React, { useEffect, useState } from 'react';
import HeroSection from "./components/HeroSection";
import SiteContact from './components/SiteContact';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Experties from "./components/Experties";
import About from "./components/About";


function App() {
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <About/>
      <Experties />
      <Services />
      <SiteContact />
      <Footer />
    </>
  );
}

export default App;

